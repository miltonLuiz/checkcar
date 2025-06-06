# Checkcar — Sistema de Vistoria Veicular · Vehicle Inspection System

## 🇧🇷 Sobre o Projeto

**Checkcar** é um site institucional estático para uma empresa de vistorias veiculares. Ele apresenta os serviços oferecidos de forma clara, responsiva e otimizada para SEO, com foco em leveza, compatibilidade com dispositivos móveis e performance ideal para web.

## 🇺🇸 About the Project

**Checkcar** is a static institutional website for a vehicle inspection company. It showcases the services provided in a clear, responsive and SEO-optimized manner, focusing on performance, mobile compatibility, and a lightweight footprint.

---

## 🚀 Funcionalidades · Features

- **Tipos de veículos / Vehicle types**:
    - Carros · Cars
    - Motos · Motorcycles
    - Caminhões · Trucks
    - Embarcações · Boats

- **Serviços oferecidos / Services offered**:
    - Vistoria Cautelar · Pre-purchase inspection
    - Vistoria para Transferência · Ownership transfer inspection
    - Vistoria de Transferência · Ownership transfer inspection

- **Interface**:
    - Mobile-first design
    - Páginas estáticas com carregamento rápido · Fast-loading static pages
    - Botão flutuante para WhatsApp · WhatsApp floating button

---

## 🛠️ Tecnologias Utilizadas · Stack

- **Frontend**:
    - HTML5
    - CSS3 (com media queries e variáveis)
    - JavaScript vanilla
    - Imagens `.webp` otimizadas

- **Deploy**:
    - GitHub Pages
    - GitHub Actions (CI/CD)
    - Cloudflare DNS + HTTPS

---

## 🎨 Design System

- **Cores · Colors**:
    - Azul escuro · Navy: `#060434`
    - Vermelho · Red: `#cc0000`
    - Branco · White: `#ffffff`
    - Cinzas · Grays: `#f5f5f5`, `#e0e0e0`, `#666666`
    - Texto · Text: `#333333`

- **Fonte · Font**:
    - `Inter`, fallback: `-apple-system`

- **Componentes · Components**:
    - Botões · Buttons: primário, secundário, WhatsApp, CTA
    - Cards com bordas arredondadas e hover suave · Rounded shadow cards with smooth hover

---

## 📱 Responsividade · Responsiveness

| Dispositivo · Device | Largura · Width        |
|----------------------|------------------------|
| Mobile               | até 768px              |
| Tablet               | 769px a 1024px         |
| Desktop              | acima de 1024px        |

---

## 📁 Estrutura · File Structure

```
checkcar/
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
│       ├── *.webp / *.svg
│       └── favicon.ico
├── index.html
├── agendamento.html
├── servicos.html
├── sobre.html
├── CNAME
└── .github/workflows/deploy.yml
```

---

## ⚙️ Deploy Automatizado · Auto Deployment

- Branch: `main`
- GitHub Actions publica para GitHub Pages após cada push
- Domínio personalizado via Cloudflare
- HTTPS automático após propagação DNS

---

## 🔍 Otimizações · Optimization

- Imagens em `.webp`
- Sem dependências externas
- Meta tags completas e semântica HTML5
- Hierarquia de títulos clara (`<h1>` > `<h2>` > ...)

---

## 🤝 Contribuindo · Contributing

```bash
git clone https://github.com/seuusuario/checkcar.git
git checkout -b feature/NomeDaFeature
git commit -m "feat: nova feature"
git push origin feature/NomeDaFeature
# Abra um Pull Request · Open a Pull Request
```

---

## 📄 Licença · License

Distribuído sob a licença MIT.  
Distributed under the MIT License.  
See `LICENSE` for details.

---

## 📞 Contato · Contact

Dúvidas, sugestões ou agendamentos?  
Have questions, suggestions or want to schedule a visit?

👉 Fale conosco via WhatsApp – botão disponível no site.  
👉 Contact us via WhatsApp – the button is available on the website.