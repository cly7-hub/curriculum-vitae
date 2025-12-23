// 导航栏功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 点击导航链接后关闭移动菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-item, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 技能条动画
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});

// 联系表单处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // 这里可以添加实际的表单提交逻辑
        // 例如发送到服务器或使用邮件服务
        console.log('表单数据:', { name, email, subject, message });
        
        // 显示成功消息
        alert('感谢您的消息！我会尽快回复您。');
        
        // 重置表单
        contactForm.reset();
    });
}

// 活跃导航链接高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// 添加活跃状态的CSS（通过JavaScript动态添加样式）
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// 项目展示标签页切换功能
document.addEventListener('DOMContentLoaded', () => {
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    showcaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const projectCard = tab.closest('.project-card');
            const targetTab = tab.getAttribute('data-tab');
            
            // 移除所有活动状态
            projectCard.querySelectorAll('.showcase-tab').forEach(t => t.classList.remove('active'));
            projectCard.querySelectorAll('.showcase-pane').forEach(p => p.classList.remove('active'));
            
            // 添加当前活动状态
            tab.classList.add('active');
            const targetPane = projectCard.querySelector(`#${targetTab}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});

// 时间线动画增强
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    marker.style.boxShadow = '0 0 0 0 rgba(99, 102, 241, 0.7)';
                    setTimeout(() => {
                        marker.style.transition = 'box-shadow 1s';
                        marker.style.boxShadow = '0 0 0 10px rgba(99, 102, 241, 0)';
                    }, 300);
                }
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

// 观察所有时间线项目
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px) scale(0.95)';
    timelineObserver.observe(item);
});

// 能力雷达图
function initCompetencyRadar() {
    const canvas = document.getElementById('competencyRadarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 数据定义
    const data = {
        labels: ['机械设计', 'Python编程', '数据分析', '系统理解', '项目管理', '自主学习'],
        datasets: [{
            label: '我的能力分布',
            data: [9, 8, 7, 7, 8, 9],
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: 'rgba(99, 102, 241, 0.8)',
            pointBackgroundColor: 'rgba(99, 102, 241, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
            borderWidth: 2,
            pointRadius: 4
        }]
    };
    
    // 创建雷达图
    if (typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 10,
                        ticks: {
                            stepSize: 2,
                            display: false
                        },
                        pointLabels: {
                            font: {
                                size: 12,
                                weight: '600'
                            },
                            color: '#6b7280'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}/10`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCompetencyRadar();
    
    // 项目展示标签页切换功能
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    showcaseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const projectCard = tab.closest('.project-card');
            if (!projectCard) return;
            
            const targetTab = tab.getAttribute('data-tab');
            
            // 移除当前卡片内所有激活状态
            projectCard.querySelectorAll('.showcase-tab').forEach(t => t.classList.remove('active'));
            projectCard.querySelectorAll('.showcase-pane').forEach(p => p.classList.remove('active'));
            
            // 激活当前标签页和内容窗格
            tab.classList.add('active');
            const targetPane = projectCard.querySelector(`#${targetTab}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
    
    // 核心优势卡片动画
    const advantageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.advantage-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        advantageObserver.observe(card);
    });
});

