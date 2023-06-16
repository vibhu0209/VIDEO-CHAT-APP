express js is a frame work of node js similar to flask
ejs emedded javascript templating system - html +  logic
sokect.io js library for socket programming
uuid - js library  to create unique id for chatrooms
peerjs it is a js library to create a client chat without the use of server
webRTC is possible because of peerjs
real time chat

peerjs is used in peer to peer connection

PeerServer. It is only to establish a connection between the 2 peers, so that their clients can be connected with each other and use PeerJS, but the data is not transferred through it.
PeerServer Cloud and Local PeerServer
They offer 2 types of servers - 
1. PeerServer Cloud - A cloud based PeerServer that can be used with PeerJS! 
2. Local PeerServer - A server that you could create and run locally

Node.js

steps to create a custom server for  peerjs:-
It contains 3 steps - 
1. To install the package from npm or yarn 
2. To require it in our NodeJS app and create a PeerServer 
3. To check if it works!


app.get("/",(req,res)=>{
    res.status(200).send("Hi Worlds")
});


cors = cross origin resource sharing
for cyber security

promt() it can be used to ask question to a user and save response in a variable

io.on("connection") means that as soon as the socket establishes a connection it has to shoot the arrow function next to it

socket.on("message") = it means it is a function when it will recieve a message it will execute a function

io.emit() function will trigger a createMessage socket event 

const ROOM_ID = "<%= roomId %>";
whenever u want to use the variable from the back end to the front end syntax <%= variable %>

rooms have uniqaue url so we have to make sure the client connected to the same room should get triggered for their events.

mail protocol we use smtp internet based standard communication protocol for email transmission

port 25- blocked by  465 - iana athourities for new services 
    587 only this is usable.

in nodejs we will use nodemailer we will be sending emails

app passwords - we use this because to generate passwords we can use this to access google services instead of using our own password