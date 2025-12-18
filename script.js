// 360° Interactive Training Experience - Pallet Stacking & Storing Rules
// Main JavaScript functionality

class TrainingExperience {
    constructor() {
        this.currentScene = 1;
        this.scenes = {
            1: document.getElementById('scene-1'),
            2: null // Will be loaded dynamically
        };
        this.quizStarted = false;
        this.hotspotData = {
            1: [
                {
                    id: 'hotspot-1',
                    title: 'Safety Equipment Storage',
                    content: 'All safety equipment must be stored in designated areas. Hard hats should be kept on hooks, safety vests in cabinets, and PPE gear properly organized.'
                },
                {
                    id: 'hotspot-2',
                    title: 'Pallet Inspection Area',
                    content: 'Before stacking, inspect pallets for damage, rot, or structural issues. Never use damaged pallets as they can collapse under load.'
                },
                {
                    id: 'hotspot-3',
                    title: 'Load Weight Limits',
                    content: 'Maximum stack height is 3 pallets. Ensure total weight does not exceed forklift capacity. Always distribute weight evenly.'
                }
            ],
            2: [
                {
                    id: 'hotspot-4',
                    title: 'Stacking Pattern',
                    content: 'Use interlocking stacking patterns. Place pallets so that beams align vertically for maximum stability.'
                },
                {
                    id: 'hotspot-5',
                    title: 'Clearance Requirements',
                    content: 'Maintain 3 feet clearance around sprinkler heads. Keep aisles clear for emergency access and equipment movement.'
                },
                {
                    id: 'hotspot-6',
                    title: 'Environmental Controls',
                    content: 'Monitor temperature and humidity. Extreme conditions can affect pallet integrity and product stability.'
                }
            ]
        };

        this.init();
    }

    init() {
        this.setupHotspots();
        this.setupKeyboardNavigation();
        this.setupFullscreenToggle();
    }

    setupHotspots() {
        // Setup hotspots for scene 1
        this.hotspotData[1].forEach(hotspot => {
            const element = document.querySelector(`.${hotspot.id}`);
            if (element) {
                element.addEventListener('click', () => {
                    this.showHotspotInfo(hotspot);
                });
            }
        });
    }

    showHotspotInfo(hotspot) {
        // Create modal for hotspot information
        const modal = document.createElement('div');
        modal.className = 'hotspot-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${hotspot.title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${hotspot.content}</p>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn modal-btn-secondary" onclick="trainingExperience.closeModal()">Close</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => this.closeModal());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Animate modal in
        setTimeout(() => modal.classList.add('active'), 10);
    }

    closeModal() {
        const modal = document.querySelector('.hotspot-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    navigateToScene2() {
        // Load Scene 2 if not already loaded
        if (!this.scenes[2]) {
            this.loadScene2();
        } else {
            this.switchToScene(2);
        }
    }

    loadScene2() {
        // Create Scene 2 HTML
        const scene2HTML = `
            <div id="scene-2" class="scene">
                <div class="scene-header">
                    <h1>360° Interactive Training - Scene 2</h1>
                    <p>Advanced Pallet Stacking Techniques</p>
                </div>

                <div class="scene-container">
                <iframe
                    src="https://skybox.blockadelabs.com/e/e4abfb2ca8fbb8b29c178cdfe92a72ec"
                    width="700"
                    height="700"
                    style="border:0;"
                    allow="fullscreen"
                    class="scene-iframe">
                </iframe>

                    <!-- Scene 2 Hotspots -->
                    <div class="hotspot hotspot-4" data-tooltip="Stacking Pattern">
                        <div class="hotspot-pulse"></div>
                    </div>
                    <div class="hotspot hotspot-5" data-tooltip="Clearance Requirements">
                        <div class="hotspot-pulse"></div>
                    </div>
                    <div class="hotspot hotspot-6" data-tooltip="Environmental Controls">
                        <div class="hotspot-pulse"></div>
                    </div>

                    <!-- Navigation Arrows -->
                    <div class="nav-arrow nav-prev" onclick="trainingExperience.switchToScene(1)">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </div>

                    <!-- Take Quiz Button -->
                    <button class="quiz-button" onclick="trainingExperience.startQuiz()">
                        Take Quiz
                    </button>
                </div>

                <div class="scene-footer">
                    <p>Use arrow keys or click navigation • Explore hotspots • Complete your training</p>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', scene2HTML);
        this.scenes[2] = document.getElementById('scene-2');

        // Setup Scene 2 hotspots
        this.hotspotData[2].forEach(hotspot => {
            const element = document.querySelector(`.${hotspot.id}`);
            if (element) {
                element.addEventListener('click', () => {
                    this.showHotspotInfo(hotspot);
                });
            }
        });

        this.switchToScene(2);
    }

    switchToScene(sceneNumber) {
        // Hide all scenes
        Object.values(this.scenes).forEach(scene => {
            if (scene) scene.classList.remove('active');
        });

        // Show target scene
        if (this.scenes[sceneNumber]) {
            this.scenes[sceneNumber].classList.add('active');
            this.currentScene = sceneNumber;
        }
    }

    startQuiz() {
        if (this.quizStarted) return;

        this.quizStarted = true;

        const quizModal = document.createElement('div');
        quizModal.className = 'quiz-modal';
        quizModal.innerHTML = `
            <div class="modal-content quiz-content">
                <div class="modal-header">
                    <h3>Pallet Stacking & Storing Rules Quiz</h3>
                    <button class="close-modal" onclick="trainingExperience.closeQuiz()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="quiz-question" id="quiz-question">
                        <p><strong>Question 1:</strong> What is the maximum recommended stack height for pallets?</p>
                        <div class="quiz-options">
                            <button class="quiz-option" data-answer="2">2 pallets</button>
                            <button class="quiz-option" data-answer="3">3 pallets</button>
                            <button class="quiz-option" data-answer="5">5 pallets</button>
                            <button class="quiz-option" data-answer="10">10 pallets</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(quizModal);

        // Setup quiz interactions
        const options = quizModal.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.handleQuizAnswer(e.target.dataset.answer, '3');
            });
        });

        setTimeout(() => quizModal.classList.add('active'), 10);
    }

    handleQuizAnswer(selectedAnswer, correctAnswer) {
        const isCorrect = selectedAnswer === correctAnswer;
        const feedback = isCorrect ? 'Correct!' : 'Incorrect. The correct answer is 3 pallets.';

        const quizQuestion = document.getElementById('quiz-question');
        quizQuestion.innerHTML = `
            <div class="quiz-result ${isCorrect ? 'correct' : 'incorrect'}">
                <h4>${feedback}</h4>
                <p>Training Complete! You have successfully completed the 360° interactive training experience.</p>
                <button class="modal-btn modal-btn-primary" onclick="trainingExperience.closeQuiz()">Finish Training</button>
            </div>
        `;
    }

    closeQuiz() {
        const quizModal = document.querySelector('.quiz-modal');
        if (quizModal) {
            quizModal.classList.remove('active');
            setTimeout(() => quizModal.remove(), 300);
        }
        this.quizStarted = false;
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.currentScene > 1) {
                this.switchToScene(this.currentScene - 1);
            } else if (e.key === 'ArrowRight' && this.currentScene < 2) {
                this.navigateToScene2();
            } else if (e.key === 'Escape') {
                this.closeModal();
                this.closeQuiz();
            }
        });
    }

    setupFullscreenToggle() {
        document.addEventListener('dblclick', (e) => {
            if (e.target.closest('.scene-iframe')) {
                const iframe = e.target.closest('.scene-iframe');
                if (iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                }
            }
        });
    }
}

// Global functions for HTML onclick handlers
function navigateToScene2() {
    trainingExperience.navigateToScene2();
}

function startQuiz() {
    trainingExperience.startQuiz();
}

// Initialize the training experience when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.trainingExperience = new TrainingExperience();
});
