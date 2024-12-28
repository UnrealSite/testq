import { setupScrollAnimations } from './utils/animations.js';
import { setupThemeToggle } from './utils/theme.js';
import { aiApplications } from '../content/applications.js';
import { freeAiTools } from '../content/free-tools.js';
import { premiumServices } from '../content/premium-services.js';
import { aiInteractionGuidelines } from '../content/best-practices.js';

document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimations();
    setupThemeToggle();
    renderContent();
});

function renderContent() {
    renderApplications();
    renderFreeTools();
    renderPremiumServices();
    renderGuidelines();
}

function renderApplications() {
    const container = document.getElementById('applications');
    Object.values(aiApplications).forEach(section => {
        const article = document.createElement('article');
        article.className = 'animate-on-scroll';
        article.innerHTML = `
            <h2>${section.title}</h2>
            <p>${section.description}</p>
            <div class="examples-grid">
                ${section.examples.map(example => `
                    <div class="example-card">
                        <h3>${example.name}</h3>
                        <p>${example.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(article);
    });
}

function renderFreeTools() {
    const container = document.getElementById('free-tools');
    freeAiTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'ai-card animate-on-scroll';
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <ul>
                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="${tool.url}" target="_blank" rel="noopener">Try It</a>
        `;
        container.appendChild(card);
    });
}

function renderPremiumServices() {
    const container = document.getElementById('premium-services');
    premiumServices.forEach(service => {
        const card = document.createElement('div');
        card.className = 'ai-card premium animate-on-scroll';
        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <ul>
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <span class="price">${service.price}</span>
        `;
        container.appendChild(card);
    });
}

function renderGuidelines() {
    const container = document.getElementById('guidelines');
    Object.values(aiInteractionGuidelines).forEach(section => {
        const article = document.createElement('article');
        article.className = 'animate-on-scroll';
        article.innerHTML = `
            <h2>${section.title}</h2>
            <ul>
                ${section.guidelines.map(guideline => `<li>${guideline}</li>`).join('')}
            </ul>
        `;
        container.appendChild(article);
    });
}