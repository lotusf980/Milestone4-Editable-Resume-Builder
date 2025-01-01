var _a;
// Form Elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var photoInput = document.getElementById("photo");
// Preview Elements
var previewName = document.getElementById("preview-name");
var previewEmail = document.getElementById("preview-email");
var previewEducation = document.getElementById("preview-education");
var previewSkills = document.getElementById("preview-skills");
var previewPhoto = document.getElementById("preview-photo");
// Function to update the resume preview
function updatePreview() {
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
        var skills = skillsInput.value
            .split(",")
            .map(function (skill) { return skill.trim(); })
            .join(", ");
        previewSkills.textContent = skills;
    }
}
// Function to update the photo in the resume preview
function updatePhoto(event) {
    var _a;
    var target = event.target;
    var file = (_a = target === null || target === void 0 ? void 0 : target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file && previewPhoto) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                previewPhoto.src = e.target.result;
                previewPhoto.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    }
    else if (previewPhoto) {
        previewPhoto.style.display = "none";
    }
}
// Attach event listeners
(_a = document.getElementById("generate-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", updatePreview);
photoInput === null || photoInput === void 0 ? void 0 : photoInput.addEventListener("change", updatePhoto);
// Make preview elements editable
[previewName, previewEmail, previewEducation, previewSkills].forEach(function (element) {
    if (element) {
        element.contentEditable = "true";
    }
});
