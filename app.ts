// Form Elements
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const educationInput = document.getElementById("education") as HTMLTextAreaElement | null;
const skillsInput = document.getElementById("skills") as HTMLInputElement | null;
const photoInput = document.getElementById("photo") as HTMLInputElement | null;

// Preview Elements
const previewName = document.getElementById("preview-name") as HTMLElement | null;
const previewEmail = document.getElementById("preview-email") as HTMLElement | null;
const previewEducation = document.getElementById("preview-education") as HTMLElement | null;
const previewSkills = document.getElementById("preview-skills") as HTMLElement | null;
const previewPhoto = document.getElementById("preview-photo") as HTMLImageElement | null;

// Function to update the resume preview
function updatePreview(): void {
    if (nameInput && previewName) {
        previewName.textContent = nameInput.value;
    }
    if (emailInput && previewEmail) {
        previewEmail.textContent = emailInput.value;
    }
    if (educationInput && previewEducation) {
        previewEducation.textContent = educationInput.value;
    }
    if (skillsInput && previewSkills) {
        const skills = skillsInput.value
            .split(",")
            .map((skill) => skill.trim())
            .join(", ");
        previewSkills.textContent = skills;
    }
}

// Function to update the photo in the resume preview
function updatePhoto(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file && previewPhoto) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                previewPhoto.src = e.target.result as string;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    } else if (previewPhoto) {
        previewPhoto.style.display = "none";
    }
}

// Attach event listeners
document.getElementById("generate-resume")?.addEventListener("click", updatePreview);
photoInput?.addEventListener("change", updatePhoto);

// Make preview elements editable
[previewName, previewEmail, previewEducation, previewSkills].forEach((element) => {
    if (element) {
        element.contentEditable = "true";
    }
});
