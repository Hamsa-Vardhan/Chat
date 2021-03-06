const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const mongodb = require('mongodb');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
require('dotenv').config();
module.exports = { express, cors, jwt, bodyParser, socketio, mongodb, nodemailer, bcrypt };
