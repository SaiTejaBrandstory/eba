function toggleFaq(element) {
    const faqItem = element.parentElement;
    const allFaqItems = document.querySelectorAll(".faq-item");
  
    // Remove 'active' and 'previous' classes from all items
    allFaqItems.forEach(item => {
      item.classList.remove("active", "previous");
      item.querySelector(".faq-icon").textContent = "+";
    });
  
    // Add 'active' class to the clicked item
    faqItem.classList.add("active");
    faqItem.querySelector(".faq-icon").textContent = "-";
  
    // Add 'previous' class to the item before the active one, if it exists
    const previousItem = faqItem.previousElementSibling;
    if (previousItem) {
      previousItem.classList.add("previous");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {

    // Content database with all 7 entries
    const contentDatabase = {
        1: {
            title: "Social Media Management",
            content: `<p>Social media platforms are where you can reach your current and potential employee population collectively. Over 79% of job seekers use social media to evaluate a company's culture and values, making a strong social presence of a brand crucial.</p>
                    
                     <p>BrandStory, through its employer branding services, helps humanize your brand, making your employer brand more approachable and transparent, giving potential candidates a glimpse of what it's like to work at your organization and ultimately, building an aspiration over it.</p>`,
            image: "./images/social-media.svg",
            backgroundColor: "#F5F9FF",
            color: "#000000"
        },
        2: {
            title: "Video Production",
            content: `<p>Videos are the effective way of communicating and getting the attention of your preferred audience group. Bringing an effective video strategy into your employer brand can help both your internal and external communications.</p>
                    
                     <p>The right video strategy allows your organization to tell its story in an authentic and relatable way, showcasing real people, real spaces, and real moments that words alone can't capture.</p>`,
            image: "./images/video-production.svg",
            backgroundColor: "#75BAF9",
            color: "#FFFFFF"
        },
        3: {
            title: "Internal Communication",
            content: `<p>Marketing your employer brand online and attracting new employees is one thing. But making sure your current employees engage with your employer brand,  align with its EVPs mission, and goals, and become the brand ambassadors themselves is what makes it more sustainable.</p>
                    
                     <p>BrandStory, the employer branding agency in India, helps assess your current communication practices to identify gaps and areas for improvement in developing and executing internal communication plans that align with your organisational goals and cultural nuances.</p>`,
            image: "./images/internal-communication.svg",
            backgroundColor: "#1BC6AF",
            color: "#FFFFFF"
        },
        4: {
            title: "Website Development",
            content: `<p>A website can be your brand’s more prominent asset for both internal and external engagements. A well-designed career page serves as a platform to highlight your employer brand and its key concepts through its visual features that are more related to the brand, like videos, testimonials, and culture highlights.</p>
                    
                     <p>With a UI that offers easy access to information about company culture, open roles, employee benefits, and growth opportunities, BrandStory can develop careers sites that create a positive impression of your workplace and potentially attract passive candidates browsing your site.</p>`,
            image: "./images/website-development.svg",
            backgroundColor: "#EDFBF9",
            color: "#000000"
        },
        5: {
            title: "Graphic Designs",
            content: `<p>A professional and consistent design across all platforms and campaigns helps reinforce your employer branding message and makes your brand instantly recognizable.</p>
                    
                     <p>Be it graphics solutions for your entire employer brand or creating themes for special and unique campaigns, BrandStory consults enterprises in their employer branding requirements right from ideation and conceptualization to collateral building and marketing.</p>`,
            image: "./images/graphic-designs.svg",
            backgroundColor: "#F9F7FE",
            color: "#000000"
        },
        6: {
            title: "Animated Videos",
            content: `<p>Animated videos are perfect for breaking down intricate concepts like career growth paths, company policies, or benefits into engaging, easy-to-understand visuals. On crowded platforms like LinkedIn or Instagram, they help with conveying the information effectively.</p>
                    
                     <p>Not just for complex information, animations help in building story narrations for communications that are important and need a strong positioning and branding. BrandStory helps its clients in creating unique ideas that align with their employer branding goals and resonate with their target audience for better outcomes.</p>`,
            image: "./images/animated-videos.svg",
            backgroundColor: "#E6B33D",
            color: "#FFFFFF"
        },
        7: {
            title: "Performance Marketing Campaigns",
            content: `<p>Ads can directly promote job openings or specific campaigns, guiding candidates to apply while building awareness about your company culture. They generate insights on candidate behavior and preferences, helping refine employer branding strategies.</p>
                    
                     <p>BrandStory runs paid campaigns across online platforms like LinkedIn, Google and Meta, helping boost your brand's visibility and increase a campaign's reach to the desired audience. From designing campaigns that can scale with the hiring needs to the ones that enhance your employer brand's reach, we ensure flexibility for ongoing or one-off recruitment drives.</p>`,
            image: "./images/performance-marketing.svg",
            backgroundColor: "#EC696A",
            color: "#FFFFFF"
        }
    };

    // Modal event listener
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('data-id');
            const color = this.getAttribute('data-color');

            const content = contentDatabase[id];
            if (content) {
                const modal = document.getElementById('contentModal');
                modal.querySelector('.modal-title').textContent = content.title;
                modal.querySelector('#modalImage').src = content.image;
                
                // Update modal content with header and content
                modal.querySelector('#modalContent').innerHTML = `
                    ${content.content}`;
                
                // Set background color and text color
                modal.querySelector('.modal-content').style.backgroundColor = content.backgroundColor;
                modal.querySelector('.modal-content').style.color = content.color;
                modal.querySelector('.modal-title').style.color = content.color;
                
                // Adjust close button color based on background
                if (content.color === '#FFFFFF') {
                    modal.querySelector('.btn-close').style.filter = 'invert(1)';
                } else {
                    modal.querySelector('.btn-close').style.filter = 'none';
                }
            }
        });
    });
});



function toggleAnswer(element) {
    const item = element.parentElement;
    const wasActive = item.classList.contains('active');
    
    document.querySelectorAll('.query-item.active').forEach(activeItem => {
        activeItem.classList.remove('active');
    });

    if (!wasActive) {
        item.classList.add('active');
    }
}