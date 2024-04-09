import Button from "./Button";
import { useState } from "react";
import './Home.css';

function Home() {
    const [count, setCount] = useState(0);
    const handleClik = () => {
        setCount(count + 1);
        console.log("You clicked the button!");
    }
  return (
    <div className="home">
      <h2 className="home-title">Welcome to our site!</h2>
      <p className="home-text">We're absolutely delighted to have you here. This platform is crafted with you and your furry friend in mind - a unique space where creativity meets canine love, and every visit unveils something fresh and exhilarating. Dive into a world brimming with possibilities, where you can explore, learn, and connect in ways you've never imagined before with your dog.
Our mission is to arm you with the tools and resources you need to turn your dog-owning dreams into reality. Whether you're here to find inspiration, sharpen your pet care skills, or simply explore new horizons with your dog, we're here to support you every step of the way.
Explore our extensive range of articles, tutorials, and interactive content designed to spark your creativity and fuel your curiosity about all things canine. Join our community to connect with like-minded individuals who share your passion and enthusiasm for dogs.
Remember, this is more than just a website; it's a journey. We're thrilled to be a part of your journey, helping you to discover, grow, and achieve your goals as a dog owner. So, what are you waiting for? Start exploring today and see where this adventure takes you and your furry companion!
Thank you for choosing us as your companion on this journey. Welcome aboard, and let's create something amazing together!</p>
    <Button className="like-button" onClick={handleClik} type="button" visual="button">Thumbs Up!</Button>
    <p>Likes: {count}</p>
    </div>
  )
}

export default Home;