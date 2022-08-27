import React from 'react'
import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import HomePage from '../src/pages/index';
import AppsData from '../src/JsonData/AppsData';
import WorksData from '../src/JsonData/WorksData';
import BlogData from "../src/JsonData/BlogData"


test('should sidebar renders the header', () => {
  render(<HomePage />);
  const sideHeaderEle = screen.getByText(/rohan dsouza/i);
  expect(sideHeaderEle.innerHTML).toBe('Rohan Dsouza');
});

test('should sidebar renders the sub-header', () => {
  render(<HomePage />);
  const subHeaderEle = screen.getAllByText(/fullstack developer/i);
  expect(subHeaderEle[0].innerHTML).toBe('Fullstack Developer');
  expect(subHeaderEle[1].innerHTML).toBe('Fullstack Developer');
});

// check footer icons links render
test('should sidebar render footer Icons', () => {
  render(<HomePage />);
  const instaIconEle = screen.getAllByRole("instafollow");
  const linkinIconEle = screen.getAllByRole("linkinFollow");
  const gitIconEle = screen.getAllByRole("gitFollow");
  const emailIconEle = screen.getAllByRole("emailFollow");
  expect(instaIconEle.length).toBe(2);
  expect(linkinIconEle.length).toBe(2);
  expect(gitIconEle.length).toBe(2);
  expect(emailIconEle.length).toBe(2);
});

test('should sidebar renders Home page links', async() => {
  render(<HomePage />);
  const menuButtonEle = screen.getAllByText(/home/i);
  expect(menuButtonEle.length).toBe(2);
  const homeContent = screen.getByText(/rohan jones dsouza/i);

  // check main body render
  fireEvent.click(menuButtonEle[0]);

  await waitFor(() => 
      expect(homeContent.innerHTML).toBe("Rohan Jones DSouza")
   );
});

/**
 *
 // check one item on apps listing page
test('should atleast one item render on apps listing page', async() => {
  render(<HomePage />);
  const menuButtonEle = screen.getAllByText(/^apps/i);
  
  expect(menuButtonEle.length).toBe(2);
  
  // check main body render
  fireEvent.click(menuButtonEle[0]);
  
  const homeContent = screen.getByText(/whatsapp birthday stickers/i);
  await waitFor(() => 
      expect(homeContent.innerHTML).toBe("WhatsApp BirthDay Stickers")
   );
});


// check full apps listing page item count 
test('should all items render on apps listing page', async() => {
  render(<HomePage />);
  const menuButtonEle = screen.getAllByText(/^apps/i);
  
  expect(menuButtonEle.length).toBe(2);
  // check main body render
  fireEvent.click(menuButtonEle[1]);
  
  const appsItems = screen.getAllByRole("appsItems");
  
  
  await waitFor(() => {
      expect(appsItems.length).toBe(AppsData.length)
    }
   );
  });
//ToDo: test case for individual app pages


// check my-works listing page item count 
test('should all items render on my-works listing page', async() => {
  render(<HomePage />);
  const menuButtonEle = screen.getAllByText(/^My Work/i);
  
  expect(menuButtonEle.length).toBe(2);
  // check main body render
  fireEvent.click(menuButtonEle[1]);
  
  const appsItems = screen.getAllByRole("workItems");
  
  
  await waitFor(() => {
      expect(appsItems.length).toBe(WorksData.length)
    }
   );
});
//ToDo: test case for individual work pages  

// check blog listing page item count 
test('should all items render on blog listing page', async() => {
  render(<HomePage />);
  const menuButtonEle = screen.getAllByText(/^Blog/i);
  
  expect(menuButtonEle.length).toBe(2);
  // check main body render
  fireEvent.click(menuButtonEle[1]);
  
  const blogItems = screen.getAllByRole("blogItem");
  
  const TotalItems = BlogData.rss.channel.item;
  
  await waitFor(() => {
      expect(blogItems.length).toBe(TotalItems.length)
    }
   );
});
//ToDo: test case for individual blog pages
*/