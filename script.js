function calculateAll() {
    const dobInput = document.getElementById("dob").value;
    const output = document.getElementById("output");
    const ageText = document.getElementById("ageText");
    const daysLived = document.getElementById("daysLived");
    const nextBday = document.getElementById("nextBday");

    if (!dobInput) {
        alert("Please select your date of birth");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    ageText.textContent = `You are ${years}y ${months}m ${days}d old.`;

    // Total days lived
    const diff = today - dob;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    daysLived.textContent = `Total days you lived: ${totalDays}`;

    // Days until next birthday
    const nextBdayDate = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (nextBdayDate < today) nextBdayDate.setFullYear(today.getFullYear() + 1);
    const diffNext = nextBdayDate - today;
    const nextDays = Math.ceil(diffNext / (1000 * 60 * 60 * 24));
    nextBday.textContent = `Days until next birthday: ${nextDays}`;

    output.classList.remove("hidden");
}
