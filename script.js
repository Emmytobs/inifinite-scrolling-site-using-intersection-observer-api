const sections = document.querySelectorAll('section');
const details = document.querySelectorAll('.detail');
let feedObserverTarget = document.querySelector('span#feed_observer_target')

const sectionsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return entry.target.classList.add('black')
        };
        entry.target.classList.remove('black')
        // To stop the observing the entry
        // This prevents the entry from receiving the class of "black", even when is is intersecting
        // observer.unobserve(entry.target);
    })
}, {
    root: null,
    threshold: 0.25,
    rootMargin: ""
});
sections.forEach(section => sectionsObserver.observe(section))


// New Intersection Observer


const detailsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            console.log('Removed: ', entry.target)
            return entry.target.classList.remove('fadeIn')
        };
        entry.target.classList.add('fadeIn')
        console.log(entry.target)
        // To stop the observing the entry
        // This prevents the entry from receiving the class of "black", even when is is intersecting
        // observer.unobserve(entry.target);
    })
}, {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
})

details.forEach(detail => detailsObserver.observe(detail));

const endOfFeedObserver = new IntersectionObserver((entries, endOfFeedObserver) => {
    
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        };
        const feed = document.querySelector('.feed')
        const loadingIndicator = document.querySelector('#loading_indicator')
        loadingIndicator.style.display = 'block';
        for(let num = 1; num <= 6; num++) {
            const pEl = document.createElement('p');
            pEl.innerHTML = 'blackLorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate alias excepturi sit eligendi aspernatur dolorem nesciunt consequatur sequi laboriosam?'
            setTimeout(() => {
                feed.insertBefore(pEl, feedObserverTarget)
            }, 1000)
        }

        // console.log('Adding...')
        // lastFeed = document.querySelectorAll('.feed > p:nth-last-child(2)')
        // console.log(entry)
    })
}, {
    root: null,
    threshold: 1,
    rootMargin: '0px'
})

endOfFeedObserver.observe(feedObserverTarget);

// endOfFeedObserver.observe(feed)
// lastFeed.forEach(feed => endOfFeedObserver.observe(feed))