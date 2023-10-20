import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'


const customers = [
    {
      'id' : 1,
      'image' : 'https://i.namu.wiki/i/udmB1o7x1bc2TnJes7BKkxAx_79H4evCYwvecJPjLDR0uQxviuDGuUDX7fUY-KyUY9T4VlUh0VlnhTeCBSnjD5FgRMojov7Ym2YmIuJiDzIPQogeEQ1piW82oH8BOR2AJlCOKGQHfhCV2T5G-z4VQg.webp',
      'name' : '나동빈',
      'birthday' : '961222',
      'gender' : '남자',
      'job' : '대학생'
    },

    {
    'id' : 2,
    'image' : 'https://w7.pngwing.com/pngs/722/357/png-transparent-elsa-kristoff-olaf-anna-olaf-photography-cartoon-desktop-wallpaper-thumbnail.png',
    'name' : '홍길동',
    'birthday' : '960305',
    'gender' : '남자',
    'job' : '프로그래머'
    },

    {
    'id' : 3,
    'image' : 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/08/20/115039682.1.jpg',
    'name' : '이순신',
    'birthday' : '921205',
    'gender' : '남자',
    'job' : '디자이너'
    }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      } 
    </div>
  );
}

export default App;
