document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".announcement-text p");
    const pushButton = document.getElementById("push-btn");
    const resumeButton = document.getElementById("resume-btn");
    let currentIndex = 0;
    let interval;
  
    function showParagraph(index) {
        paragraphs.forEach((p, i) => {
            p.style.display = i === index ? "block" : "none";
        });
    }
  
    function startRotation() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % paragraphs.length;
            showParagraph(currentIndex);
        }, 2000);
        toggleButtons(false); // Show the push button and hide the resume button
    }
  
    function stopRotation() {
        clearInterval(interval);
        toggleButtons(true); // Show the resume button and hide the push button
    }
  
    function toggleButtons(isPaused) {
        if (isPaused) {
            pushButton.style.display = "none";
            resumeButton.style.display = "inline-block";
        } else {
            pushButton.style.display = "inline-block";
            resumeButton.style.display = "none";
        }
    }
  
    pushButton.addEventListener("click", stopRotation);
    resumeButton.addEventListener("click", startRotation);
  
    // Initialize: Display the first paragraph, start rotation, and set button visibility
    showParagraph(currentIndex);
    startRotation();
    toggleButtons(false); // Initially show the push button
  });






document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".s2-h2");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });


  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".img-1 img");

    // IntersectionObserver callback function
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the element is in view, add the animation class to its parent
          entry.target.parentElement.classList.add("animate");
        } else {
          // If the element is out of view, remove the animation class from its parent
          entry.target.parentElement.classList.remove("animate");
        }
      });
    }

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    });

    // Observe each image and paragraph
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const pagination = document.querySelector('.pagination');
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    // Create pagination dots
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('pagination-dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      pagination.appendChild(dot);
    }
  
    const updatePagination = () => {
      document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };
  
    const moveToSlide = (index) => {
      currentIndex = (index + totalSlides) % totalSlides;
      slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
      updatePagination();
    };
  
    // Event listeners for arrows
    leftArrow.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });
  
    rightArrow.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });
  
    // Event listeners for pagination dots
    document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        moveToSlide(index);
      });
    });
  });

  












  const productBox = document.getElementById("product-box");
  const rightArrow = document.getElementById("right-ar");
  const leftArrow = document.getElementById("left-ar");
  const products = document.querySelectorAll(".product-sec");
  
  let currentIndex = 0; // Current position index
  const productsPerPage = 5; // Number of products to show per page
  
  // Function to update product display
  function updateProducts() {
    const productWidth = products[0].offsetWidth + 17; // Width of each product including margins
    const totalMove = productWidth * productsPerPage; // Total move for one page of products
  
    // Calculate the total number of pages
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
  
    // Limit the maximum move to the total available products
    if (currentIndex >= totalPages) {
      currentIndex = totalPages - 1;
    }
  
    productBox.style.transform = `translateX(-${currentIndex * totalMove}px)`; // Smooth transition
  }
  
  // Event listener for right arrow click
  rightArrow.addEventListener("click", function () {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentIndex < totalPages - 1) {
      currentIndex++;
      updateProducts();
    }
  });
  
  // Event listener for left arrow click
  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateProducts();
    }
  });
  
  // Initial setup
  window.addEventListener('resize', updateProducts);
  updateProducts();
  



  document.addEventListener("DOMContentLoaded", function () {
    const productBox = document.getElementById("product-box-6");
    const rightArrow = document.getElementById("right-ar-6");
    const leftArrow = document.getElementById("left-ar-6");
    const products = document.querySelectorAll(".product-sec-6");
    const totalProducts = products.length;
    const visibleProducts = 4;
    let currentIndex = 0;
  
    function updateSlider() {
      // Move the slider by the width of 4 products each time
      const productWidth = products[0].offsetWidth + 17;
      productBox.style.transform = `translateX(-${currentIndex * productWidth * visibleProducts}px)`;
    }
  
    rightArrow.addEventListener("click", function () {
      if (currentIndex < Math.ceil(totalProducts / visibleProducts) - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Go back to the start when reaching the end
      }
      updateSlider();
    });
  
    leftArrow.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = Math.ceil(totalProducts / visibleProducts) - 1; // Go to the last set of products
      }
      updateSlider();
    });
  });
  




  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".s7-heading");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".s7-img-section");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".s8-heading");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".s8-img-section");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });









  const slideshowContainer = document.querySelector('.slide-img');
  const allSlides = document.querySelectorAll('.img-sets');
  const prevArrow = document.querySelector('.left-arrow-box');
  const nextArrow = document.querySelector('.right-arrow-box');
  
  let currentSlideIndex = 0;
  const totalSlides = allSlides.length;
  const imagesPerView = 4;
  const slideIntervalTime = 2000;
  
  function displaySlide(index) {
      slideshowContainer.style.transform = `translateX(${-index * 25}%)`;
  }
  
  function goToNextSlide() {
      if (currentSlideIndex < totalSlides - imagesPerView) {
          currentSlideIndex++;
      } else {
          currentSlideIndex = 0; // Loop back to the start
      }
      displaySlide(currentSlideIndex);
  }
  
  function goToPreviousSlide() {
      if (currentSlideIndex > 0) {
          currentSlideIndex--;
      } else {
          currentSlideIndex = totalSlides - imagesPerView; // Loop back to the last set
      }
      displaySlide(currentSlideIndex);
  }
  
  // Automatic slideshow
  let slideshowInterval = setInterval(goToNextSlide, slideIntervalTime);
  
  // Click event for arrows
  nextArrow.addEventListener('click', () => {
      goToNextSlide();
      restartInterval();
  });
  
  prevArrow.addEventListener('click', () => {
      goToPreviousSlide();
      restartInterval();
  });
  
  // Restart interval to keep slideshow running after manual click
  function restartInterval() {
      clearInterval(slideshowInterval);
      slideshowInterval = setInterval(goToNextSlide, slideIntervalTime);
  }
  


  function updateShowMoreLabel(containerId) {
    const container = document.getElementById(containerId).parentNode;
    const hiddenBoxes = container.querySelectorAll('.s4-boxs.hide');
    const showMoreButton = document.getElementById(containerId);
    if (hiddenBoxes.length > 0) {
        showMoreButton.textContent = `+${hiddenBoxes.length}`;
    } else {
        showMoreButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateShowMoreLabel('show-more'); // Initial update for first container

    document.getElementById('show-more').addEventListener('click', function() {
        const container = this.parentNode;
        const hiddenBoxes = container.querySelectorAll('.s4-boxs.hide');
        hiddenBoxes.forEach(box => {
            box.style.display = 'inline-block';
            box.classList.remove('hide');
        });
        updateShowMoreLabel('show-more');
    });
  }); 
document.addEventListener('DOMContentLoaded', function() {
    updateShowMoreLabel('show-more1'); // Initial update for first container

    document.getElementById('show-more1').addEventListener('click', function() {
        const container = this.parentNode;
        const hiddenBoxes = container.querySelectorAll('.s4-boxs.hide');
        hiddenBoxes.forEach(box => {
            box.style.display = 'inline-block';
            box.classList.remove('hide');
        });
        updateShowMoreLabel('show-more1');
    });
  }); 
document.addEventListener('DOMContentLoaded', function() {
    updateShowMoreLabel('show-more2'); // Initial update for first container

    document.getElementById('show-more2').addEventListener('click', function() {
        const container = this.parentNode;
        const hiddenBoxes = container.querySelectorAll('.s4-boxs.hide');
        hiddenBoxes.forEach(box => {
            box.style.display = 'inline-block';
            box.classList.remove('hide');
        });
        updateShowMoreLabel('show-more2');
    });
  }); 
  

  document.addEventListener('DOMContentLoaded', () => {
    // Data array to store product information for each product section
    const productVariants = [
      [ // Product 1 variants
        {
          image: 's-m (2).jpg',
          hoverImage: 's-m (1).jpg',
          name: 'Sweet Hoodie Set 1',
          price: '234.3 rs'
        },
        {
          image: 'bot-2 (2).jpg',
          hoverImage: 'bot-2 (1).jpg',
          name: 'Sweet Hoodie Set 1 Variant 2',
          price: '250.0 rs'
        },
        {
          image: 'bot-3 (2).jpg',
          hoverImage: 'bot-3 (1).jpg',
          name: 'Sweet Hoodie Set 1 Variant 3',
          price: '270.0 rs'
        },
        {
          image: 'bot-4 (2).jpg',
          hoverImage: 'bot-4 (1).jpg',
          name: 'Sweet Hoodie Set 1 Variant 4',
          price: '290.0 rs'
        }
      ],
      [ // Product 2 variants
        {
          image: 'cap-m (1).jpg',
          hoverImage: 'cap-m (2).jpg',
          name: 'Cap Set 1',
          price: '199.9 rs'
        },
        {
          image: 'cap-2 (2).jpg',
          hoverImage: 'cap-2 (1).jpg',
          name: 'Cap Set 1 Variant 2',
          price: '210.0 rs'
        },
        {
          image: 'cap-3 (2).jpg',
          hoverImage: 'cap-3 (1).jpg',
          name: 'Cap Set 1 Variant 3',
          price: '230.0 rs'
        },
        {
          image: 'cap-4 (1).jpg',
          hoverImage: 'cap-4 (2).jpg',
          name: 'Cap Set 1 Variant 4',
          price: '250.0 rs'
        },
        {
          image: 'cap-4 (3).jpg',
          hoverImage: 'cap-4 (4).jpg',
          name: 'Cap Set 1 Variant 5',
          price: '250.0 rs'
        },
        {
          image: 'cap-5 (1).jpg',
          hoverImage: 'cap-5 (3).jpg',
          name: 'Cap Set 1 Variant 5',
          price: '250.0 rs'
        },
        {
          image: 'cap-5 (2).jpg',
          hoverImage: 'cap-5 (4).jpg',
          name: 'Cap Set 1 Variant 5',
          price: '250.0 rs'
        }
      ],
      [ // Product 3 variants
        {
          image: 'bag-m (1).jpg',
          hoverImage: 'bag-m (2).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        }
      ],
      [ // Product 4 variants
        {
          image: 'black-s-m (1).jpg',
          hoverImage: 'black-s-m (2).jpg',
          name: 'Black Set 1',
          price: '399.9 rs'
        },
        {
          image: 'white-bot-2 (2).jpg',
          hoverImage: 'white-bot-2 (1).jpg',
          name: 'Black Set 2',
          price: '399.9 rs'
        }
      ]
    ];
  
    // Get the container that holds all the product sections
    const productSections = document.querySelectorAll('.product-sec-6');
  
    productSections.forEach((section, sectionIndex) => {
      // Select all circles within this product section
      const circles = section.querySelectorAll('.cir-box');
      const productImage = section.querySelector('.default-img');
      const hoverImage = section.querySelector('.hover-img');
      const productName = section.querySelector('#product-name');
      const productPrice = section.querySelector('#product-price');
  
      // Set the first circle as active by default
      if (circles.length > 0) {
        circles[0].classList.add('active');
        const product = productVariants[sectionIndex][0];
        productImage.src = product.image;
        hoverImage.src = product.hoverImage;
        productName.textContent = product.name;
        productPrice.textContent = product.price;
      }
  
      // Iterate over each circle and add a click event listener
      circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
          // Remove 'active' class from all circles in this section
          circles.forEach(cir => cir.classList.remove('active'));
  
          // Add 'active' class to the clicked circle
          circle.classList.add('active');
  
          // Get the product variant from the array
          const product = productVariants[sectionIndex][index];
  
          // Update the product image, hover image, name, and price
          if (product) {
            productImage.src = product.image;
            hoverImage.src = product.hoverImage;
            productName.textContent = product.name;
            productPrice.textContent = product.price;
          }
        });
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    // Data array to store product information for each product section
    const productVariants = [
      [ // Product 1 variants
        {
          image: 'b1-img.jpg',
          hoverImage: 'b1-img-hover-dot-1.jpg',
          name: 'Sweet Hoodie Set 1',
          price: '234.3 rs'
        },
        {
          image: 'first-m (1).jpg',
          hoverImage: 'first-m (2).jpg',
          name: 'Sweet Hoodie Set 1 Variant 2',
          price: '250.0 rs'
        },
        {
          image: 'first-m (3).jpg',
          hoverImage: 'first-m (4).jpg',
          name: 'Sweet Hoodie Set 1 Variant 3',
          price: '270.0 rs'
        },
        {
          image: 'first-m (5).jpg',
          hoverImage: 'first-m (6).jpg',
          name: 'Sweet Hoodie Set 1 Variant 4',
          price: '290.0 rs'
        }
      ],
      [ // Product 2 variants
        {
          image: '0777-AL0W3859RRHT0XS-3.jpg',
          hoverImage: '0777-AL0W3859RRHT0XS-4.jpg',
          name: 'Cap Set 1',
          price: '199.9 rs'
        },
        {
          image: 'second-m (1).jpg',
          hoverImage: 'second-m (2).jpg',
          name: 'Cap Set 1 Variant 2',
          price: '210.0 rs'
        },
        {
          image: 'second-m (3).jpg',
          hoverImage: 'second-m (4).jpg',
          name: 'Cap Set 1 Variant 3',
          price: '230.0 rs'
        },
        {
          image: 'second-m (5).jpg',
          hoverImage: 'second-m (6).jpg',
          name: 'Cap Set 1 Variant 5',
          price: '220.0 rs'
        },
        {
          image: 'second-m (7).jpg',
          hoverImage: 'second-m (8).jpg',
          name: 'Cap Set 1 Variant 6',
          price: '280.0 rs'
        },
        {
          image: 'second-m (9).jpg',
          hoverImage: 'second-m (10).jpg',
          name: 'Cap Set 1 Variant 7',
          price: '210.0 rs'
        }
      ],
      [ // Product 3 variants
        {
          image: '0777-AL0W3859RN820XS-5.jpg',
          hoverImage: '0777-AL0W3859RN820XS-2.jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        },
        {
          image: 'third (1).jpg',
          hoverImage: 'third (2).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        },
        {
          image: 'third (3).jpg',
          hoverImage: 'third (4).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        },
        {
          image: 'third (5).jpg',
          hoverImage: 'third (6).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        },
        {
          image: 'third (7).jpg',
          hoverImage: 'third (8).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        },
        {
          image: 'third (9).jpg',
          hoverImage: 'third (10).jpg',
          name: 'Bag Set 1',
          price: '299.9 rs'
        }
      ],
      [ // Product 4 variants
        {
          image: '4-m.jpg',
          hoverImage: '4-h.jpg',
          name: 'Black Set 1',
          price: '399.9 rs'
        },
        {
          image: 'fourth (1).jpg',
          hoverImage: 'fourth (2).jpg',
          name: 'Black Set 1',
          price: '399.9 rs'
        },
        {
          image: 'fourth (3).jpg',
          hoverImage: 'fourth (4).jpg',
          name: 'Black Set 1',
          price: '399.9 rs'
        },
        {
          image: 'fourth (5).jpg',
          hoverImage: 'fourth (6).jpg',
          name: 'Black Set 1',
          price: '399.9 rs'
        },
      ], // product 5 varints
      [
        {
          image: '5-m.jpg',
          hoverImage: '5-h.jpg',
          name: 'Black Set 1',
          price: '339.9 rs' 
        },
        {
          image: 'fiveth (1).jpg',
          hoverImage: 'fiveth (2).jpg',
          name: 'Black Set 1',
          price: '319.9 rs' 
        },
        {
          image: 'fiveth (3).jpg',
          hoverImage: 'fiveth (4).jpg',
          name: 'Black Set 1',
          price: '329.9 rs' 
        },
        {
          image: 'fiveth (5).jpg',
          hoverImage: 'fiveth (6).jpg',
          name: 'Black Set 1',
          price: '359.9 rs' 
        },
      ]
    ];
  
    // Get the container that holds all the product sections
    const productSections = document.querySelectorAll('.product-section');
  
    productSections.forEach((section, sectionIndex) => {
      // Select all mini-boxes within this product section
      const miniBoxes = section.querySelectorAll('.mini-box');
      const mainProductImage = section.querySelector('.product-imgs');
      const productHoverImage = section.querySelector('.hover-product-img');
      const productTitle = section.querySelector('.product-title');
      const productCost = section.querySelector('.product-cost');
  
      // Set the first mini-box as active by default
      if (miniBoxes.length > 0) {
        miniBoxes[0].classList.add('active');
        const product = productVariants[sectionIndex][0];
        mainProductImage.src = product.image;
        productHoverImage.src = product.hoverImage;
        productTitle.textContent = product.name;
        productCost.textContent = product.price;
      }
  
      // Iterate over each mini-box and add a click event listener
      miniBoxes.forEach((box, index) => {
        box.addEventListener('click', () => {
          // Remove 'active' class from all mini-boxes in this section
          miniBoxes.forEach(bx => bx.classList.remove('active'));
  
          // Add 'active' class to the clicked mini-box
          box.classList.add('active');
  
          // Get the product variant from the array
          const product = productVariants[sectionIndex][index];
  
          // Update the product image, hover image, name, and price
          if (product) {
            mainProductImage.src = product.image;
            productHoverImage.src = product.hoverImage;
            productTitle.textContent = product.name;
            productCost.textContent = product.price;
          }
        });
      });
    });
  });
  
  


  const languageList = document.getElementById('language-list');
        const arrow = document.getElementById('arrow');
        const languageItems = languageList.getElementsByTagName('li');

        // Set default selected language
        document.getElementById('language-button').firstChild.nodeValue = 'Indonesia ';

        // Highlight the selected language
        for (let i = 0; i < languageItems.length; i++) {
            languageItems[i].addEventListener('click', function() {
                // Remove 'selected' class from all items
                for (let j = 0; j < languageItems.length; j++) {
                    languageItems[j].classList.remove('selected');
                }
                // Add 'selected' class to the clicked item
                this.classList.add('selected');
                // Set button text to the selected language
                document.getElementById('language-button').firstChild.nodeValue = this.textContent + ' ';
            });
        }

        document.getElementById('language-button').addEventListener('click', function() {
            if (languageList.classList.contains('open')) {
                languageList.classList.remove('open');
                arrow.className = 'ri-arrow-down-s-line'; // Down arrow icon
            } else {
                languageList.classList.add('open');
                arrow.className = 'ri-arrow-up-s-line'; // Up arrow icon
            }
        });