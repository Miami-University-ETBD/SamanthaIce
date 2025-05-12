<script>
// Initialize modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});


// Function to display selected pastry
function displayPastry() {
    const selectedPastry = document.querySelector('input[name="pastry"]:checked').value;
    document.getElementById('pastry-response').innerText = `You selected: ${selectedPastry}`;
}
// Function to handle email subscription form submission
function submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('email-response').innerText = `Thank you for subscribing! Updates will be sent to: ${email}`;
    document.getElementById('email').value = ''; // Clear the input


    // Display modal
    const modalText = document.getElementById('modal-content-text');
    modalText.innerText = `Thank you for subscribing! Updates will be sent to: ${email}`;
    const modal = M.Modal.getInstance(document.getElementById('modal1'));
    modal.open();
}
</script>

<div id="radio-section" class="section container">
       <h2>Select Your Favorite Pastry</h2>
       <form>
           <p>
               <label>
                   <input name="pastry" type="radio" value="Croissant" onclick="displayPastry()"/>
                   <span>Croissant</span>
               </label>
           </p>
           <p>
               <label>
                   <input name="pastry" type="radio" value="Muffin" onclick="displayPastry()"/>
                   <span>Muffin</span>
               </label>
           </p>
           <p>
               <label>
                   <input name="pastry" type="radio" value="Donut" onclick="displayPastry()"/>
                   <span>Donut</span>
               </label>
           </p>
       </form>
       <div id="pastry-response"></div>
   </div>
 <!-- Email Feedback Section -->
 <div id="feedback-section" class="section container">
     <h2>Subscribe for Updates</h2>
     <form onsubmit="submitEmail(event)">
         <div class="input-field">
             <input id="email" type="email" required>
             <label for="email">Email</label>
         </div>
         <button type="submit" class="btn waves-effect waves-light">Subscribe</button>
     </form>
     <div id="email-response"></div>
 </div>
<div id="modal1" class="modal">
   <div class="modal-content">
     <h4>Check Your email-response</h4>
     <p id="modal-content-text"></p>
   </div>
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat"
       >Close</a
     >
   </div>
 </div>
