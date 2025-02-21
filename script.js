document.getElementById("leadForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o redirecionamento padrão

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast("✅ Mensagem enviada com sucesso!"); // Exibe o toast
            form.reset(); // Reseta o formulário
        } else {
            showToast("❌ Ocorreu um erro. Tente novamente!", true);
        }
    } catch (error) {
        showToast("❌ Erro ao enviar. Verifique sua conexão.", true);
    }
});

document.getElementById("emailForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o redirecionamento padrão

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast("✅ Mensagem enviada com sucesso!"); // Exibe o toast
            form.reset(); // Reseta o formulário
        } else {
            showToast("❌ Ocorreu um erro. Tente novamente!", true);
        }
    } catch (error) {
        showToast("❌ Erro ao enviar. Verifique sua conexão.", true);
    }
});


function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.backgroundColor = isError ? "#f44336" : "#4CAF50"; // Vermelho para erro, verde para sucesso
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // Remove após 3 segundos
}

let bars = document.querySelector("#bars");
let menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("show_menu");
});