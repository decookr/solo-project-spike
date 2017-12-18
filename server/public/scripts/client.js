var app = angular.module('PhotosApp', []);
app.controller('PhotoController', function () {
    var self = this;
    var clicks = 0;

    self.photosArray = [
        {
            name: 'Family',
            url: '/images/family.jpg',
            text: 'Family is the most important thing in the world to me',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:5FpTr8jmmJbuXVRw4iuLoU'
        },
        {
            name: 'Amy',
            url: '/images/amy.jpg',
            text: 'My wife, Amy, is my best friend and my favorite person in the entire world',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:5FpTr8jmmJbuXVRw4iuLoU'

        },
        {
            name: 'Noah',
            url: '/images/noah.jpg',
            text: 'My baby boy, Noah, brings me so much laughter and joy',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:06fOl4WZi4XJlP71fWFtwN'
            
        },
        {
            name: 'Dad',
            url: '/images/dad.jpg',
            text: 'My dad passed away in 2010, but his influence still guides me in every decision I make',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:5FpTr8jmmJbuXVRw4iuLoU'

        },
        {
            name: 'Mom',
            url: '/images/mom.jpg',
            text: 'My mom is one of the most loving and supportive people I know',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:5FpTr8jmmJbuXVRw4iuLoU'

        },
        {
            name: 'Drums',
            url: '/images/drums.jpg',
            text: 'Drumming is one of my favorite hobbies',
            spotify: 'https://open.spotify.com/embed?uri=spotify:track:5FpTr8jmmJbuXVRw4iuLoU'

        }
    ];


});
