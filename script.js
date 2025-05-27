//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const ageInput = document.getElementById("age").value.trim();
  const nameInput = document.getElementById("name").value.trim();

  if (ageInput === "" || nameInput === "") {
    alert("Please enter valid details.");
    return;
  }

  const age = Number(ageInput);
  const name = nameInput;

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  checkVotingEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
