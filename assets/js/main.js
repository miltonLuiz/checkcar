// Máscara para o campo de telefone
document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 0) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                if (value.length > 10) {
                    value = `${value.slice(0, 10)}-${value.slice(10)}`;
                }
            }
            
            e.target.value = value;
        });
    }
});

// Máscara para o campo de placa
document.addEventListener('DOMContentLoaded', function () {
    const placaInput = document.getElementById('placa');
    if (placaInput) {
        placaInput.addEventListener('input', function (e) {
            let value = e.target.value.toUpperCase();
            value = value.replace(/[^A-Z0-9]/g, '');
            
            if (value.length > 7) value = value.slice(0, 7);
            
            e.target.value = value;
        });
    }
});

// Data mínima para agendamento (próximo dia útil)
document.addEventListener('DOMContentLoaded', function () {
    const dataInput = document.getElementById('data');
    if (dataInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dataInput.setAttribute('min', minDate);
    }
});

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');

    if (header && nav) {
        // Adiciona classe ao header quando rolar a página
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('nav-open');
                menuToggle.classList.toggle('menu-open');
                menuToggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                    nav.classList.remove('nav-open');
                    menuToggle.classList.remove('menu-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close menu when clicking a link
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('nav-open');
                    menuToggle.classList.remove('menu-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }
});

// Envio do formulário para WhatsApp
function enviarParaWhatsApp(event) {
    event.preventDefault();

    const form = event.target;
    const nome = form.nome.value;
    const telefone = form.telefone.value;
    const tipoVistoria = form.tipoVistoria.value;
    const placa = form.placa.value;
    const data = new Date(form.data.value).toLocaleDateString('pt-BR');
    const observacoes = form.observacoes.value;

    // Monta a mensagem
    let mensagem = `Olá! Gostaria de agendar uma vistoria:\n\n`;
    mensagem += `*Nome:* ${ nome }\n`;
    mensagem += `*Telefone:* ${ telefone }\n`;
    mensagem += `*Tipo de Vistoria:* ${ tipoVistoria }\n`;
    mensagem += `*Placa do Veículo:* ${ placa }\n`;
    mensagem += `*Data Desejada:* ${ data }\n`;

    if (observacoes) {
        mensagem += `\n*Observações:* ${ observacoes }`;
    }

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Abre o WhatsApp com a mensagem
    window.open(`https://wa.me/5514998418586?text=${ mensagemCodificada }`, '_blank');

    // Limpa o formulário
    form.reset();

    return false;
}

// Animações de entrada
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll(
        '.service-card, .vehicle-type, .benefit, .mvv-item, .differential-item'
    );

    animateElements.forEach(element => {
        element.classList.add('animate-ready');
        observer.observe(element);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Atualiza o ano do copyright automaticamente
document.addEventListener('DOMContentLoaded', function() {
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
    }
});

// Garante que os botões "Saiba Mais" funcionem corretamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Saiba Mais"
    const saibaMaisButtons = document.querySelectorAll('.service-card .service-content .btn-secondary');
    
    // Adiciona evento de clique a cada botão
    saibaMaisButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Previne o comportamento padrão apenas se necessário
            // e.preventDefault();
            
            // Redireciona para o URL no atributo href
            const url = this.getAttribute('href');
            if (url) {
                window.location.href = url;
            }
        });
        
        // Adiciona estilo de cursor pointer explicitamente
        button.style.cursor = 'pointer';
    });
});

// Melhora o comportamento de scroll para as âncoras de serviços
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página de serviços
    if (window.location.pathname.includes('servicos.html')) {
        // Verifica se há uma âncora na URL
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Adiciona um pequeno atraso para garantir que a página esteja completamente carregada
                setTimeout(function() {
                    // Rola até o elemento com offset para compensar o cabeçalho fixo
                    const headerHeight = 80; // Altura aproximada do cabeçalho fixo
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }
}); 