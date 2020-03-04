
// Task 5:
// При клике на кнопку change - цвет круга и размер меняются на те, что пользователь пропишет в input-полях

function show() {
    round.style.background = bgcin.value;
    round.style.width = wh.value + 'em';
    round.style.height = wh.value + 'em';
    console.log(round.style.width);
}

btn1.onclick = show;

