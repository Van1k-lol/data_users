async function getIPInfo() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        document.getElementById('ip').innerText = 'IP Address: ' + data.ip;
        document.getElementById('country').innerText = 'Country: ' + data.country_name;
        document.getElementById('city').innerText = 'City: ' + data.city;
    } catch (error) {
        console.error('Ошибка получения IP информации:', error);
    }
}

function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const browser = userAgent.includes('Chrome') ? 'Google Chrome' : 
                    userAgent.includes('Firefox') ? 'Mozilla Firefox' :
                    userAgent.includes('Safari') ? 'Safari' :
                    userAgent.includes('MSIE') ? 'Internet Explorer' : 
                    'Неизвестный';
    document.getElementById('browser').innerText = 'Browser: ' + browser;
}

function getDeviceType() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const type = isMobile ? 'Мобильное устройство' : 'Настольный компьютер';
    document.getElementById('device').innerText = 'Device name: ' + type;
}
function displayInfo() {
const progressBar = document.getElementById('progressBar');
        document.getElementById('user__content').style.display = 'none'
        document.getElementById('Head').innerHTML = 'Headline text';
        document.getElementById('Head').style.margin = '10px 0 50px';
        document.getElementById('subtitle').innerHTML = 'Description text';
        progressBar.style.display = 'block';
        document.getElementById('infoButton').style.display = 'none';
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2; // Увеличиваем прогресс на 2% за каждую итерацию
            // document.getElementById('progress').innerHTML = progress + '%';
            progressBar.style.width = progress + '%';
            if (progress >= 100) {
                progressBar.style.display = 'none';
                clearInterval(interval);
                getIPInfo();
                getBrowserInfo();
                getDeviceType();
                document.getElementById('infoButton').style.display = 'block'
                document.getElementById('user__content').style.display = 'block'
            }
        }, 100);
         // Обновляем прогресс каждые 100 миллисекунд
    }   
document.getElementById('infoButton').addEventListener('click', displayInfo)



