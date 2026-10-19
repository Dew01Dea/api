const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'สวัสดี Back-End!' });
});

const members = [
  { id: 1, name: 'Durongkon', role: 'DevA' },
  { id: 2, name: 'Tharathep', role: 'DevB' },
];

const project = {
  team: 'Tabian',
  topic: 'Tabian',
  problem: 'Tabian problem',
  users: ['Student', 'Admin'],
  members: members,
};

app.get('/project', (req, res) => {
  res.json(project);
});

app.get('/members', (req, res) => {
  res.status(200).json(members);
});

app.get('/members/:id', (req, res) => {
  const id = Number(req.params.id);                  // /members/2 ได้ id = 2
  const member = members.find((m) => m.id === id);   // หาสมาชิกที่ id ตรงกัน
  if (!member) {                                     // ถ้าหาไม่พบ
    return res.status(404).json({ message: 'Member not found' });
  }
  res.json(member);
});

app.get('/ideas', (req, res) => {
  res.json({
    message: 'Tabian Ideas',
    ideas: [
      { id: 1, title: 'Idea A' },
      { id: 2, title: 'Idea B' },
    ],
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});