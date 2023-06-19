const express = require("express");
const app = express();
const server = require("http").Server(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

const { v4: uuidv4 } = require("uuid");

const io = require("socket.io")(server, {
    cors: {
        origin: '*'
    }
});

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});

app.use("/peerjs", peerServer);

var nodemailer = require('nodemailer');
const { error, info } = require("console");
// transporter can be used to transport emails on someone behalf
const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: 'vibhu0209@gmail.com',
        pass: 'tmmfuqkofdeumzjb',
    },
    secure: true,
})

app.get("/", (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
    res.render("index", { roomId: req.params.room });
});

app.post("/send-mail",(req,res)=>{
    // email of reciever
    const to = req.body.to
    // url which reciever has to join
    const url = req.body.url

    const mailData = {
        from: 'vibhu0209@gmail.com',
        to: to,
        subject: "Join The VIDEO CHAT with me!!",
        html: `<p>Hey there, </p> <p>Come and join me for a video chat here -${url} </p>`,
    }
    transporter.sendMail(mailData,(error,info) => {
        if(error){            
           return console.log(error)            
        }
        res.status(200).send({message:"invitation sent!",message_id: info.messageId})    
    })
})

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId, userName) => {
        socket.join(roomId);
        io.to(roomId).emit("user-connected",userId)
        socket.on("message",(message) => {
            io.to(roomId).emit("createMessage", message, userName);
        });9
    });
});

server.listen(3030);

// done