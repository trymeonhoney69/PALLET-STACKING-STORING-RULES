// 360° Interactive Training Experience - App Module
// Additional utilities and helpers

const TrainingApp = {
    // Configuration
    config: {
        scenes: 2,
        hotspots: 6,
        quizQuestions: 5,
        vrEnabled: false
    },

    // Utility functions
    utils: {
        // Check if device supports VR
        checkVRSupport() {
            return 'getVRDisplays' in navigator || 'xr' in navigator;
        },

        // Get current viewport dimensions
        getViewportSize() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        // Check if iframe is loaded
        checkIframeLoaded(iframe) {
            return new Promise((resolve) => {
                iframe.addEventListener('load', () => resolve(true));
                // Timeout fallback
                setTimeout(() => resolve(false), 5000);
            });
        },

        // Generate unique IDs for elements
        generateId(prefix = 'element') {
            return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        }
    },

    // Analytics (basic tracking)
    analytics: {
        events: [],

        track(eventType, data) {
            const event = {
                type: eventType,
                timestamp: new Date().toISOString(),
                data: data
            };
            this.events.push(event);
            console.log('Analytics Event:', event);
        },

        getStats() {
            return {
                totalEvents: this.events.length,
                hotspotsClicked: this.events.filter(e => e.type === 'hotspot_click').length,
                scenesViewed: this.events.filter(e => e.type === 'scene_view').length,
                quizCompleted: this.events.filter(e => e.type === 'quiz_complete').length
            };
        }
    },

    // VR Integration (placeholder for future A-Frame/Marzipano integration)
    vr: {
        init() {
            if (this.utils.checkVRSupport()) {
                console.log('VR support detected');
                this.config.vrEnabled = true;
                // Future: Initialize A-Frame or Marzipano VR mode
            } else {
                console.log('VR not supported on this device');
            }
        },

        enterVRMode() {
            if (this.config.vrEnabled) {
                // Future: Implement VR mode switching
                alert('VR mode would be activated here');
            } else {
                alert('VR is not supported on this device');
            }
        }
    },

    // Performance monitoring
    performance: {
        startTime: Date.now(),

        getLoadTime() {
            return Date.now() - this.startTime;
        },

        checkPerformance() {
            const loadTime = this.getLoadTime();
            console.log(`App loaded in ${loadTime}ms`);

            if (loadTime > 3000) {
                console.warn('Slow load time detected');
            }

            return loadTime;
        }
    },

    // Initialization
    init() {
        console.log('Training App initializing...');

        // Check performance
        this.performance.checkPerformance();

        // Check VR support
        this.vr.init();

        // Track app start
        this.analytics.track('app_start', {
            userAgent: navigator.userAgent,
            viewport: this.utils.getViewportSize(),
            vrSupport: this.config.vrEnabled
        });

        console.log('Training App ready');
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TrainingApp;
} else {
    window.TrainingApp = TrainingApp;
}
