// Default Month Names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthSelect = document.getElementById("month-select");
  const yearSelect = document.getElementById("year-select");
  const datesElement = document.getElementById("dates");
  
  let currentDate = new Date();
  
  // Populate Month and Year Dropdowns
  function populateDropdowns() {
    // Populate Month Dropdown
    monthNames.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = month;
      monthSelect.appendChild(option);
    });
  
    // Populate Year Dropdown (e.g., 1900 - 2100)
    for (let year = 1900; year <= 2100; year++) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }
  
    // Set initial selected values
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();
  }
  
  // Render Calendar
  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
  
    // Update dropdowns
    monthSelect.value = month;
    yearSelect.value = year;
  
    datesElement.innerHTML = "";
  
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
  
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      datesElement.innerHTML += `<div class="date empty"></div>`;
    }
  
    // Populate dates
    for (let day = 1; day <= lastDate; day++) {
      const isToday =
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
  
      datesElement.innerHTML += `
        <div class="date ${isToday ? "current-day" : ""}">${day}</div>
      `;
    }
  }
  
  // Event Listeners for Dropdowns
  monthSelect.addEventListener("change", () => {
    currentDate.setMonth(parseInt(monthSelect.value));
    renderCalendar(currentDate);
  });
  
  yearSelect.addEventListener("change", () => {
    currentDate.setFullYear(parseInt(yearSelect.value));
    renderCalendar(currentDate);
  });
  
  // Initialize Dropdowns and Render Calendar
  populateDropdowns();
  renderCalendar(currentDate);
  