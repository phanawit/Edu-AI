// แยก JavaScript จากส่วน <script> ใน HTML มาที่นี่

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update input areas
        document.querySelectorAll('.input-area').forEach(area => area.classList.remove('active'));
        document.getElementById(tabId + '-input').classList.add('active');
    });
});

// ... JavaScript อื่นๆ ...