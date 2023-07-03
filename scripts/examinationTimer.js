const day = (1000 * 60 * 60 * 24);

const examination = 1695160800000;
setInterval(
    () => {
        let string = new String();
        let difference = Math.abs(Date.now() - examination);

        let days = Math.ceil(difference / day);
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let months = Math.floor(days / 31);

        if (months > 0) {
            string += `${months}달`;
        }
        string += ` ${days % 31}일 ${hours % 24}시간 ${minutes % 60}분 ${seconds % 60}초`;
        return timer.text(string);
    }, 500,
);
