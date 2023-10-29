const chatbotIcon = document.getElementById('chatbot-icon');
        const chatbotContainer = document.getElementById('chatbot-container');
        const chatDiv = document.getElementById('chatDiv'); // Reference to the chat container
        const userInput = document.getElementById('chatbot-input');

        const responses = {
            "hello": "Hello there!",
              "hi": "Hello there!",
              "hii":"hello",
              "hiii":"hello",
              "hey":"hi",
              "how are you": "I am just a chatbot.",
              "what is your name": "I am a nameless chatbot.",
              goodbye: "Goodbye!",
              "Heart attack": {
                symptom: "Varicose veins, Hypothyroidism, Hypoglycemia, Osteoarthristis, Fungal infection",
                treatment: "Consult a doctor immediately",
              },
              vomiting: {
                symptom: "fatigue, joint_pain, muscle_weakness, skin_rash, burning_micturition, itching",
                treatment: "Rest and stay hydrated",
              },
              breathlessness: {
                symptom: "cramps, high_fever, joint_pain, skin_rash, indigestion, patches_in_throat, weight_loss",
                treatment: "Deep breathing exercises",
              },
              sweating: {
                symptom: "bruising, chills, ulcers_on_tongue, yellowish_skin, stomach_pain, loss_of_appetite",
                treatment: "Keep the affected area elevated",
              },
              chest_pain: {
                symptom: "obesity, extra_marital_contacts, lethargy, diarrhoea, family_history, loss_of_balance",
                treatment: "Maintain a healthy lifestyle",
              },
              cancer: {
                symptom: "hair-fall, difficulty-swallowing, hoarseness, unexplained-fevers, joint-pain, changeing-weight-rapidly",
                treatment: "Consult a doctor immediately",
              },
              dengue: {
                symptom: "fever, Nausea, Rash, eye pain, bone pain",
                treatment: "Consult a doctor immediately",
              },
              cold: {
                symptom: "sneezing, fever, coughing, headaches",
                treatment: "Rest and stay hydrated",
              },
              rabies: {
                symptom: "vomit, diarrhea, hair_loss, sore_throat, swelling_glands",
                treatment: "Consult a doctor immediately",
              },
              diabetes: {
                symptom: "high_blood_pressure, obesity, low_birthweight, gestation_complications",
                treatment: "Losing weight, maintaining regular exercise, eating a balanced diet",
              },
              depression: {
                symptom: "Feeling sad or hopeless for two weeks. Feeling worthless or having lost interest in activities you once enjoyed",
                treatment: "medication and psychotheray",
              },
              aids: {
                symptom: "diarrhea, night_blindness, weight_loss, rash, sores_around_anus",
                treatment: "Antiretroviral therapy (ART), HIV testing",
              },
              "covid": {
                symptom: "Flu like symptoms including fever, Cough, Sore throat, Runny nose, Headache",
                treatment: "Vaccination, Antiviral medications, Face mask, Social distancing, Stay at home",
              },
              malaria:{
                symptom: "Sweating, Fever, Chills, Vomiting, Diarrhea, Anemia",
                treatment: "Protection from mosquito bites by wearing long sleeves and trousers",
              },
              cholera: {
                symptom: "Diarrhea, vomiting, abdominal cramps, severe diarrhea with blood in stool",
                treatment: "Drinking plenty of water to prevent dehydration",
              },
              stroke: {
                symptom: "weakness_in_face, difficulty_speaking, dizziness, confusion",
                treatment: "Seek immediate medical attention",
              },
              influenza: {
                symptom: "cold_like_symptoms, muscle_aches, fatigue, sore_throat",
                treatment: "rest, drink lots of fluids, over the counter medicines",
              },
              arthritis: {
                symptom: "pain, stiffness, limited mobility",
                treatment: "Physical therapy, Bracing, Painkillers",
              },
              tuberculosis: {
                symptom: "Coughing up phlegm, Night sweats, Weight loss, Night blindness",
                treatment: "Treatment is done through antibiotics and rest",
              },
              hepatitis: {
                symptom: "Abdominal pain, Nausea, Fatigue, Dark urine, Jaundice",
                treatment: "Medication for liver function",
              },
              asthma: {
                symptom: "Shortness_of_breath, wheezing, coughing, chest tightening",
                treatment: "Inhaler or oral medicine",
              },
              dementia: {
                symptom: "Alzheimer's disease causes progressive memory loss. It may also cause changes in personality, behavior",
                treatment: "Medications, Behavioral and Psychological Therapies",
              },
              acne: {
                symptom: "Blackheads, Whiteheads, Black spots on face",
                treatment: "Topical creams, retinoids, blue light filtering glasses",
              },
              anxiety: {
                symptom: "Feeling worried, nervous, irritable, feeling hopeless",
                treatment: "Psychotherapy, Relaxation techniques, Meditation",
              },
              asbestosis: {
                symptom: "Coughing, Shortness of breath, Wheezing, Lung cancer",
                treatment: "Quit smoking, Medical treatment",
              },
              "atopic-eczema": {
                symptom: "Itching skin rash, Dry skin, Itchy eyes",
                treatment: "Moisturizers, topical corticosteroid cream",
              },
              piles: {
                symptom: "Severe itching, Anal fissures, Hemorrhoids",
                treatment: "Crepe bandages, Surgery if necessary",
              },
              arthritis: {
                symptom: "Joint pain, Swelling, Limited movement",
                treatment: "Physical therapy, Bracing, Painkillers",
              },
              angioedema: {
                symptom: "Swollen legs, shortness of breath, rapid heartbeat",
                treatment: "Blood pressure meds, ACE inhibitors",
              }
        };

        function appendMessage(message, isUser = false) {
            const messageDiv = document.createElement("div");
            messageDiv.className = isUser ? "user-message" : "chatbot-message";
            messageDiv.innerHTML = message;
            chatDiv.appendChild(messageDiv);
        }

        function displayJSONData(data) {
            let formattedMessage = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
            appendMessage(`💬 Chatbot: ${formattedMessage}`);
        }

        function sendMessage() {
            const userMessage = userInput.value;
            appendMessage(`👤 You: ${userMessage}`, true);
            userInput.value = "";

            const response = responses[userMessage];
            if (response) {
                if (typeof response === 'object') {
                    // If the response is an object (JSON data), display it as JSON
                    displayJSONData(response);
                } else {
                    // Display the response as a text message
                    appendMessage(`Chatbot: ${response}`);
                }
            } else {
                appendMessage(`Chatbot: Sorry, I can't understand your question.`);
            }
        }

        function handleKeyPress(event) {
            event.preventDefault();
            if (event.key === "Enter") {
                sendMessage();
            }
        }

        // Event listener to trigger sendMessage on Enter key press
        userInput.addEventListener("keypress", handleKeyPress);





