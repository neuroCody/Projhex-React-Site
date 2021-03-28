import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: '/assets/images/bug-tracker-Create-lg.png',
        altText: 'Create a Bug',
        caption: 'Create a tracking card for any bug impacting progress'
    },
    {
        src: '/assets/images/bug-tracker-Dash-lg.png',
        altText: 'Bug Dashboard',
        caption: 'View all active bugs color-categorized by priority'
    }, 
    {
        src: '/assets/images/bug-tracker-View-lg.png',
        altText: 'Bug View',
        caption: 'Get detailed information on each pending task'
    },
];

const BugCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if(animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item => {
        return(
            <CarouselItem 
                onExiting={()=> setAnimating(true)}
                onExited={()=> setAnimating(false)}
                key={item.src}
            >
                <img className="d-block w-100" src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.capton} captionHeader={item.caption} />
            </CarouselItem>
        )
    }));

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onCickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default BugCarousel;
