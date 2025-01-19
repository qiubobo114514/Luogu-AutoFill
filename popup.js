document.addEventListener("DOMContentLoaded", () => {
    const inputSection = document.getElementById("input-section");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("save");
    const fillButton = document.getElementById("fill");
    const resetButton = document.getElementById("reset");

    // 读取存储的账号密码，并决定界面显示
    chrome.storage.local.get(["username", "password"], (data) => {
        if (data.username && data.password) {
            // 已经存储了账号密码，隐藏输入框，显示 "FILL" 和 "重置"
            inputSection.style.display = "none";
            fillButton.style.display = "block";
            resetButton.style.display = "block";
        } else {
            // 账号密码未保存，显示输入框，隐藏 "FILL" 和 "重置"
            inputSection.style.display = "block";
            fillButton.style.display = "none";
            resetButton.style.display = "none";
        }
    });

    // 保存账号密码
    saveButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("用户名和密码不能为空！");
            return;
        }

        chrome.storage.local.set({ username, password }, () => {
            alert("账号密码已保存！");
            inputSection.style.display = "none";
            fillButton.style.display = "block";
            resetButton.style.display = "block";
        });
    });

    // 自动填充账号密码
    fillButton.addEventListener("click", () => {
        chrome.storage.local.get(["username", "password"], (data) => {
            if (data.username && data.password) {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    if (tabs.length === 0) {
                        alert("未找到活动页面！");
                        return;
                    }
                    const tabId = tabs[0].id;

                    chrome.scripting.executeScript({
                        target: { tabId: tabId },
                        function: autofill,
                        args: [data.username, data.password]
                    });
                });
            } else {
                alert("请先保存账号密码！");
            }
        });
    });

    // 重置账号密码
    resetButton.addEventListener("click", () => {
        chrome.storage.local.remove(["username", "password"], () => {
            alert("账号密码已清除，请重新输入！");
            inputSection.style.display = "block";
            fillButton.style.display = "none";
            resetButton.style.display = "none";
            usernameInput.value = "";
            passwordInput.value = "";
        });
    });
});

// 自动填充函数
function autofill(username, password) {
    const usernameInput = document.querySelector("input[type='text'][placeholder='用户名、手机号或电子邮箱']");
    const passwordInput = document.querySelector("input[type='password'][placeholder='密码']");

    if (!usernameInput || !passwordInput) {
        alert("未找到用户名或密码输入框！");
        return;
    }

    usernameInput.value = username;
    passwordInput.value = password;

    // 触发 input 事件，让网站检测到输入
    usernameInput.dispatchEvent(new Event("input", { bubbles: true }));
    passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
}
