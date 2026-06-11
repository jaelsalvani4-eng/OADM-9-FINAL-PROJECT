const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const authTitle = document.getElementById('auth-title');
        const authSubtitle = document.getElementById('auth-subtitle');
        const toggleText = document.getElementById('toggle-text');
        const errorMsg = document.getElementById('error-message');
        const successMsg = document.getElementById('success-message');

        // Toggle Password Visibility
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const btn = input.nextElementSibling;
            if (input.type === "password") {
                input.type = "text";
                btn.innerText = "Hide";
            } else {
                input.type = "password";
                btn.innerText = "Show";
            }
        }

        function showAuth(mode) {
            errorMsg.classList.add('hidden');
            successMsg.classList.add('hidden');
            if (mode === 'signup') {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
                authTitle.innerText = "Create your account";
                authSubtitle.innerText = "Start your 14-day free trial today.";
                toggleText.innerHTML = 'Already have an account? <a href="javascript:void(0)" onclick="showAuth(\'login\')" class="text-indigo-600 font-bold hover:underline">Log in</a>';
            } else {
                signupForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
                authTitle.innerText = "Welcome back";
                authSubtitle.innerText = "Please enter your details to continue.";
                toggleText.innerHTML = 'Don\'t have an account? <a href="javascript:void(0)" onclick="showAuth(\'signup\')" class="text-indigo-600 font-bold hover:underline">Sign up for free</a>';
            }
        }

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const u = document.getElementById('login-username').value;
            const p = document.getElementById('login-password').value;

            if(u === "jsalvani@gmail.com" && p === "jns123") {
                window.location.href = "jns.html"; }

                if(u === "dre_ng7@gmail.com" && p === "dre_ng7*") {
                window.location.href = "dre.html"; }

                if(u === "jagustine@gmail.com" && p === "ja123") {
                window.location.href = "ja.html";
            } else {
                errorMsg.innerText = "Invalid credentials. Try 'example@gmail.com' and '123456'.";
                errorMsg.classList.remove('hidden');
            }
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successMsg.innerText = "Check your email to verify your account!";
            successMsg.classList.remove('hidden');
        });