const fullName = document.querySelector('.full-name');
const username = document.querySelector('.usernamelog');
const loginBtn = document.querySelector('.login');
const inputSend = document.querySelector('.inputSend');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const contact = document.querySelector('.contact');
const mainPart = document.querySelector('.main-part');
const mainPartNav = document.querySelector('.main-part-nav')

const sendMessage1 = []
const sendMessage2 = []

loginBtn.addEventListener('click', () => {
    nav1.style.display='none'
    // nav2.style.display='none'
    nav2.innerHTML = `<span style="margin-left: 1100px;">Hello ${fullName.value}</span> <button>LogOut</button>`

    contact.innerHTML = `
    <div>
        <button style='margin: 10px 70px; padding: 5px;'>New Chat</button><br> 
        <div class="user1" style='padding-left: 20px;'>
            <span style="font-size: 14px;">Super Admin</span><br>
            <span style="font-size: 12px;">You: ${sendMessage1[sendMessage1.length-1]}</span>
        </div>
        <div class="user2" style='padding-left: 20px;'>
            <span style="font-size: 14px;">${fullName.value}</span><br>
            <span style="font-size: 12px;">You: ${sendMessage2[sendMessage2.length-1]}</span>
        </div>
        </div>`
        
    const user1 = document.querySelector('.user1');

    user1.addEventListener('click', () => {
        mainPartNav.style.display='flex'
        mainPartNav.innerHTML = `<span>Super Admin</span><span>Username: admin</span>`

        const sendBtn = document.querySelector('.send');
        inputSend.value=''
        
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault()
            sendMessage1.push(inputSend.value)
            document.querySelector('.messages').innerHTML += `
            <div class="div1">
                <div>${inputSend.value}</div> 
            </div>`
            
            
        })
    })


    const user2 = document.querySelector('.user2');

    user2.addEventListener('click', () => {
        mainPartNav.style.display='flex'
        mainPartNav.innerHTML = `<span>${fullName.value}</span><span>Username: ${username.value}</span>`
        
        const sendBtn = document.querySelector('.send');
        inputSend.value=''
        
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault()
            sendMessage2.push(inputSend.value)
            document.querySelector('.messages').innerHTML += `
            <div class="div2">
                <div>${sendMessage2[sendMessage2.length-1]}</div>
            </div>
            ` 
        })
    })
})