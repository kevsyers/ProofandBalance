const navbar = document.querySelector(".navbar");
const logoImg = document.querySelector(".logo img");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logoImg.src = "./assets/images/PB-logo.svg";
    } else {
        navbar.classList.remove("scrolled");
        logoImg.src = "./assets/images/PB-logo-reverse.svg";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quoteForm");
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const progressFill = document.getElementById("progressFill");
    const stepIndicatorText = document.getElementById("stepIndicatorText");
    const successMessage = document.getElementById("successMessage");

    // --- ACTION REQUIRED ---
    // REPLACE 'info@proofandbalance.com' WITH YOUR ACTUAL RECEIVING EMAIL ADDRESS
    const FORMSUBMIT_URL =
        "https://formsubmit.co/ajax/hello@proofandbalance.com";

    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.remove("active");
            if (index === stepIndex) step.classList.add("active");
        });

        const progressPercentage = ((stepIndex + 1) / steps.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        stepIndicatorText.textContent = `Step ${stepIndex + 1} of ${steps.length}`;

        if (stepIndex === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "flex";
        }

        if (stepIndex === steps.length - 1) {
            nextBtn.innerHTML =
                'Submit Request <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        } else {
            nextBtn.innerHTML =
                'Next Step <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
        }
    }

    // TIER 2 SECURITY: Algorithmic Spam Pattern Detection
    function containsSpamPatterns(text) {
        if (!text) return false;
        // Detects URLs (http, https, www) and common HTML tags used by bots
        const spamRegex =
            /(http:\/\/|https:\/\/|www\.|<a href=|<link|<script)/i;
        return spamRegex.test(text);
    }

    // Next / Submit Button Logic
    nextBtn.addEventListener("click", () => {
        const currentStepEl = steps[currentStep];
        let isValid = true;

        // 1. Standard Required Field Validation
        const requiredInputs =
            currentStepEl.querySelectorAll("input[required]");
        requiredInputs.forEach((input) => {
            const errorMsg = input.nextElementSibling;
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = "#d32f2f";
                if (errorMsg && errorMsg.classList.contains("error-message"))
                    errorMsg.style.display = "block";
            } else {
                input.style.borderColor = "var(--border-color)";
                if (errorMsg && errorMsg.classList.contains("error-message"))
                    errorMsg.style.display = "none";
            }
        });

        // 2. TIER 2 SPAM VALIDATION (Step 1 Name & Step 5 Notes)
        if (currentStep === 0) {
            const nameInput = document.getElementById("clientName");
            if (containsSpamPatterns(nameInput.value)) {
                isValid = false;
                nameInput.style.borderColor = "#d32f2f";
                const nameError = document.getElementById("nameError");
                if (nameError) nameError.style.display = "block";
            }
        }

        if (currentStep === steps.length - 1) {
            const notesInput = document.getElementById("additionalNotes");
            if (containsSpamPatterns(notesInput.value)) {
                isValid = false;
                notesInput.style.borderColor = "#d32f2f";
                const notesError = document.getElementById("notesError");
                if (notesError) notesError.style.display = "block";
            }
        }

        if (!isValid) return; // Stop if validation fails

        // 3. Move to next step OR Submit
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // --- AJAX FORM SUBMISSION ---
            const originalBtnText = nextBtn.innerHTML;
            nextBtn.innerHTML = "Sending securely...";
            nextBtn.disabled = true;

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                if (data[key]) {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });

            fetch(FORMSUBMIT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
        }
    });

    // Previous Button
    prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // Input Validation Reset on Typing
    const allInputs = document.querySelectorAll("input, textarea");
    allInputs.forEach((input) => {
        input.addEventListener("input", () => {
            input.style.borderColor = "var(--primary-plum)";
            const errorMsg = input.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains("error-message"))
                errorMsg.style.display = "none";
        });
        input.addEventListener("blur", () => {
            if (input.value.trim()) {
                input.style.borderColor = "var(--border-color)";
            }
        });
    });
});
