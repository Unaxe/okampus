<template>
    <Particles
        id="tsparticles"
        :particles-init="particlesInit"
        :particles-loaded="particlesLoaded"
        :options="{
            fpsLimit: 60,
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: '#1b1e34',
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    straight: false,
                    outMode: 'out',
                    random: false,
                    speed: 6,
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 6,
                },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                shape: {
                    type: 'polygon',
                    polygon: {
                        nb_sides: 6,
                    },
                },
                size: {
                    random: false,
                    value: 160,
                    anim: {
                        enable: true,
                        speed: 10,
                        size_min: 40,
                        sync: false,
                    },
                },
            },
            detectRetina: true,
        }"
    />
</template>
