import fs from 'fs';
import path from 'path';
import jwt from "jsonwebtoken";
import express from "express";
const readUsersFromFile = ()=>{
  const rawUserData = fs.readFileSync('/Users/24LP0058/Desktop/backend/food-delivery-app/src/db/users.json');
  return JSON.parse(rawUserData);
}

export const getUsers = (req, res) => {
  const users = fs.readFileSync('src/db/users.json');
  res.send()
 
};
