import {useCallback } from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                name: "Background Mask",
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 1,
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 30,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 1,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            size: 100,
                            duration: 2,
                            opacity: 1,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                backgroundMask: {
                    enable: true,
                    cover: {
                        value: {
                            r: 255,
                            g: 255,
                            b: 255,
                        },
                    },
                },
                background: {
                    color: "#ffffff",
                    image: "url('https://particles.js.org/images/background3.jpg')",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                },
            }}
        >

        </Particles>
    );
};

export default Particle;