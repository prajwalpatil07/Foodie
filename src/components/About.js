import React from 'react';

const About = () => {
  return (
    <div className="h-screen mx-auto py-8 bg-gradient-to-r from-rose-100 to-teal-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Foodie App!</h1>
      <p className="text-lg mb-8">Our Foodie app is dedicated to providing you with delicious recipes, convenient food ordering, and much more.</p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg">Our mission is to make it easy for everyone to enjoy great food anytime, anywhere. We strive to bring joy and convenience to your dining experience.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Features</h2>
        <ul className="list-disc ml-6">
          <li>Discover thousands of recipes</li>
          <li>Order food from your favorite restaurants</li>
          <li>Personalized recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
