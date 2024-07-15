    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = `-50px`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.getElementById('balloons').appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }

    setInterval(createBalloon, 300);

    const messages = [
        "Thank you for always being there for me.",
        "Your love and support mean the world to me.",
        "I'm grateful for all the sacrifices you've made.",
        "You've taught me so much about life and love.",
        "Your strength and kindness inspire me every day."
    ];

    let messageIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        if (charIndex < messages[messageIndex].length) {
            typewriterElement.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typewriterElement.innerHTML = messages[messageIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 25);
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(typeWriter, 500);
        }
    }

    typeWriter();

    // Image fading effect
    // const images = [
    //     'https://example.com/mum_image1.jpg',
    //     'https://example.com/mum_image2.jpg',
    //     'https://example.com/mum_image3.jpg',
    //     'https://example.com/mum_image4.jpg',
    //     'https://example.com/mum_image5.jpg'
    // ];

    let currentImageIndex = 0;
    const imageContainer = document.getElementById('image-container');

    function createImage(src) {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('fade-image');
        return img;
    }

    function fadeInNextImage() {
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const currentImage = imageContainer.children[currentImageIndex];
        const nextImage = createImage(images[nextImageIndex]);
        
        imageContainer.appendChild(nextImage);
        
        setTimeout(() => {
            currentImage.style.opacity = '0';
            nextImage.style.opacity = '1';
        }, 50);

        setTimeout(() => {
            currentImage.remove();
            currentImageIndex = nextImageIndex;
            fadeInNextImage();
        }, 5000);
    }

    // Start the image fading
    imageContainer.appendChild(createImage(images[0]));
    imageContainer.children[0].style.opacity = '1';
    setTimeout(fadeInNextImage, 5000);
