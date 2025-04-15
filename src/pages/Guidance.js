import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Guidance.css';

function Guidance() {
  const [language, setLanguage] = useState('english');
  const [selectedTopic, setSelectedTopic] = useState(null);

  // ---------------------------
  // COMMON TOPICS (18 total)
  // ---------------------------
  // We'll define them in English and Tamil with at least 10 steps each.

  // ENGLISH CONTENT
  const englishTopics = {
    harvesting: {
      name: "Harvesting",
      description: [
        "1. Determine the correct harvest time based on crop maturity and weather forecasts.",
        "2. Gather the necessary tools and ensure they are clean and sharp.",
        "3. Train workers on safe and efficient harvesting methods.",
        "4. Carefully remove crops to avoid bruising or damage.",
        "5. Sort and grade produce immediately in the field.",
        "6. Record yield and quality data for future analysis.",
        "7. Transport harvested crops in clean, covered containers.",
        "8. Store produce under optimal temperature and humidity conditions.",
        "9. Implement a quality control system to maintain standards.",
        "10. Continuously refine harvesting strategies based on results."
      ],
      image: "harvesting.jpg"
    },
    irrigation: {
      name: "Irrigation",
      description: [
        "1. Assess soil moisture levels before deciding irrigation frequency.",
        "2. Choose an appropriate irrigation method (drip, sprinkler, etc.).",
        "3. Design and layout the system for optimal water distribution.",
        "4. Install piping, emitters, or sprinklers according to the plan.",
        "5. Monitor water usage to avoid over- or under-watering.",
        "6. Maintain and clean irrigation equipment regularly.",
        "7. Consider automation or timers for consistent watering schedules.",
        "8. Check for leaks or clogs frequently and fix them promptly.",
        "9. Adjust irrigation based on rainfall or weather patterns.",
        "10. Keep records of water usage to improve efficiency."
      ],
      image: "irrigation.jpg"
    },
    soil_preparation: {
      name: "Soil Preparation",
      description: [
        "1. Test soil pH and nutrient levels using a soil kit or lab.",
        "2. Remove weeds, debris, and stones from the field.",
        "3. Plough or till the soil to break up compaction.",
        "4. Incorporate organic matter like compost or manure.",
        "5. Level the land for even water distribution.",
        "6. Apply fertilizers or lime based on soil test recommendations.",
        "7. Allow the soil to rest for a few days before planting.",
        "8. Create raised beds if needed for drainage.",
        "9. Mulch the top layer to retain moisture.",
        "10. Document all steps to track improvements over time."
      ],
      image: "soil_preparation.jpg"
    },
    sowing: {
      name: "Sowing",
      description: [
        "1. Select high-quality seeds suited to your climate.",
        "2. Determine the correct planting depth and spacing.",
        "3. Calibrate sowing equipment for uniform seed distribution.",
        "4. Sow seeds during optimal weather conditions.",
        "5. Lightly cover seeds with soil to protect them from birds.",
        "6. Water the field immediately to initiate germination.",
        "7. Monitor seedling emergence and remove weak plants if needed.",
        "8. Keep the soil moist but not waterlogged.",
        "9. Apply starter fertilizer if recommended.",
        "10. Record germination rates for future reference."
      ],
      image: "sowing.jpg"
    },
    fertilization: {
      name: "Fertilization",
      description: [
        "1. Perform a soil test to identify nutrient deficiencies.",
        "2. Choose between organic or chemical fertilizers as needed.",
        "3. Calculate the correct dosage based on crop requirements.",
        "4. Apply fertilizers at the right growth stages (e.g., vegetative, flowering).",
        "5. Use split applications to avoid nutrient runoff.",
        "6. Irrigate after fertilizing to help nutrients reach roots.",
        "7. Monitor plants for signs of over- or under-fertilization.",
        "8. Store fertilizers safely away from water sources.",
        "9. Rotate fertilizer types to maintain soil health.",
        "10. Keep records of all fertilizer applications."
      ],
      image: "fertilization.jpg"
    },
    seed_selection: {
      name: "Seed Selection",
      description: [
        "1. Research crop varieties suitable for your region.",
        "2. Check germination rates and viability of seeds.",
        "3. Opt for disease-resistant or drought-tolerant strains if possible.",
        "4. Compare hybrid vs. open-pollinated seeds for yield and cost.",
        "5. Purchase seeds from reputable suppliers.",
        "6. Inspect seeds visually for damage or discoloration.",
        "7. Store seeds in a cool, dry place to maintain viability.",
        "8. Conduct a small germination test before large-scale planting.",
        "9. Plan your seed usage according to the cropping calendar.",
        "10. Keep documentation for each seed batch."
      ],
      image: "seed_selection.jpg"
    },
    harvest_and_store_produce: {
      name: "Harvest and Store Produce",
      description: [
        "1. Harvest crops at their peak maturity for best flavor and quality.",
        "2. Use clean tools and containers to prevent contamination.",
        "3. Sort produce by size and grade for easier marketing.",
        "4. Pre-cool certain produce to remove field heat quickly.",
        "5. Store crops in a temperature- and humidity-controlled environment.",
        "6. Use appropriate packaging to reduce bruising during transport.",
        "7. Implement a FIFO (First In, First Out) system for inventory.",
        "8. Label storage areas with dates and batch numbers.",
        "9. Monitor storage conditions daily to prevent spoilage.",
        "10. Document storage duration and losses for future improvements."
      ],
      image: "harvest_and_store_produce.jpg"
    },
    autonomous_farming: {
      name: "Autonomous Farming",
      description: [
        "1. Assess farm layout for compatibility with autonomous machinery.",
        "2. Invest in IoT sensors to collect soil and weather data.",
        "3. Use drones for aerial surveys and crop health monitoring.",
        "4. Implement robotic systems for tasks like seeding or weeding.",
        "5. Integrate software platforms for real-time data analytics.",
        "6. Train staff to operate and maintain autonomous equipment.",
        "7. Set up alerts for equipment malfunctions or anomalies.",
        "8. Evaluate cost-benefit analyses regularly.",
        "9. Stay updated on emerging autonomous technologies.",
        "10. Continuously refine systems to improve efficiency."
      ],
      image: "autonomous_farming.jpg"
    },
    cover_crops: {
      name: "Cover Crops",
      description: [
        "1. Choose a cover crop species that improves soil structure.",
        "2. Sow cover crops after main crop harvest to protect bare soil.",
        "3. Irrigate if necessary to ensure cover crop establishment.",
        "4. Mow or roll cover crops before they set seeds if undesired.",
        "5. Incorporate cover crop residue into the soil for added fertility.",
        "6. Rotate cover crop varieties for maximum soil benefits.",
        "7. Monitor for pests that might inhabit cover crops.",
        "8. Terminate cover crops at the right time to avoid competition.",
        "9. Document improvements in soil organic matter over time.",
        "10. Plan subsequent planting around cover crop cycles."
      ],
      image: "cover_crops.jpg"
    },
    crop: {
      name: "Crop",
      description: [
        "1. Identify the best crop for your region’s climate and soil.",
        "2. Consider market demand and profitability for each crop.",
        "3. Obtain quality seeds or seedlings from trusted sources.",
        "4. Prepare the field thoroughly before planting.",
        "5. Implement an irrigation plan suited to the crop’s water needs.",
        "6. Scout fields regularly for pests or diseases.",
        "7. Fertilize at key growth stages for maximum yield.",
        "8. Harvest at peak maturity for best quality.",
        "9. Market the crop effectively to potential buyers.",
        "10. Evaluate the entire crop cycle for continuous improvement."
      ],
      image: "crop.jpg"
    },
    crop_growth: {
      name: "Crop Growth",
      description: [
        "1. Understand the different growth stages of the crop (vegetative, flowering, fruiting).",
        "2. Adjust irrigation and fertilization according to the stage.",
        "3. Use growth regulators or stimulants if recommended.",
        "4. Track growth rate to predict harvest windows.",
        "5. Prune or thin plants to maintain healthy development.",
        "6. Monitor for any nutrient deficiencies (leaf color, stunted growth).",
        "7. Implement pest management strategies early.",
        "8. Adjust planting density for optimal sunlight and airflow.",
        "9. Evaluate weather patterns that may affect crop growth.",
        "10. Keep detailed growth logs for future reference."
      ],
      image: "crop_growth.jpg"
    },
    acquire_land: {
      name: "Acquire Land",
      description: [
        "1. Research potential areas with suitable soil and climate.",
        "2. Check legal status and zoning regulations for farmland.",
        "3. Inspect the land physically to identify any constraints.",
        "4. Analyze water availability and irrigation sources.",
        "5. Negotiate purchase or lease terms with the landowner.",
        "6. Survey the land to confirm boundaries and acreage.",
        "7. Evaluate existing infrastructure like roads and utilities.",
        "8. Consider environmental impact and sustainability.",
        "9. Plan initial land development or improvements.",
        "10. Finalize legal documents and register ownership or lease."
      ],
      image: "acquire_land.jpg"
    },
    land_preparation: {
      name: "Land Preparation",
      description: [
        "1. Clear the land of any bushes, weeds, or debris.",
        "2. Mark field boundaries for accurate planning.",
        "3. Perform ploughing to loosen compact soil layers.",
        "4. Level uneven areas to ensure uniform irrigation.",
        "5. Build drainage channels if waterlogging is a concern.",
        "6. Incorporate organic matter to improve soil fertility.",
        "7. Apply recommended fertilizers based on soil tests.",
        "8. Allow the land to rest before sowing.",
        "9. Check for pests or diseases in the soil.",
        "10. Plan the next steps (sowing, irrigation) after final prep."
      ],
      image: "land_preparation.jpg"
    },
    pest_and_disease_control: {
      name: "Pest and Disease Control",
      description: [
        "1. Identify common pests and diseases prevalent in your region.",
        "2. Scout fields regularly to catch issues early.",
        "3. Use resistant crop varieties where possible.",
        "4. Apply integrated pest management (IPM) strategies.",
        "5. Rotate crops to break pest life cycles.",
        "6. Use biological controls (beneficial insects, microbes).",
        "7. Apply chemical pesticides judiciously when needed.",
        "8. Monitor weather conditions that may influence pest outbreaks.",
        "9. Sanitize tools and equipment to prevent disease spread.",
        "10. Keep detailed records of pest occurrences and treatments."
      ],
      image: "pest_and_disease_control.jpg"
    },
    ploughing: {
      name: "Ploughing",
      description: [
        "1. Choose the right plough type (mouldboard, disc, chisel) for your soil.",
        "2. Check machinery for wear and tear before starting.",
        "3. Adjust plough depth based on crop requirements.",
        "4. Plough in straight lines to ensure uniform coverage.",
        "5. Avoid ploughing when soil is excessively wet or dry.",
        "6. Remove large stones or debris that might damage equipment.",
        "7. Cross-plough if needed for thorough soil turnover.",
        "8. Monitor fuel consumption and time for efficiency.",
        "9. Check the field after ploughing for any missed spots.",
        "10. Maintain and store the plough properly post-operation."
      ],
      image: "ploughing.jpg"
    },
    product_offering: {
      name: "Product Offering",
      description: [
        "1. Identify market demand for different farm products.",
        "2. Develop a unique selling proposition for your produce.",
        "3. Package products attractively to appeal to customers.",
        "4. Set competitive yet profitable pricing.",
        "5. Advertise through local markets or online platforms.",
        "6. Maintain consistent quality to build a loyal customer base.",
        "7. Gather feedback from buyers and make improvements.",
        "8. Diversify product range to reduce risk.",
        "9. Keep track of production costs and margins.",
        "10. Continuously innovate to stay ahead in the market."
      ],
      image: "product_offering.jpg"
    },
    storage: {
      name: "Storage",
      description: [
        "1. Determine the optimal storage method (cold, ambient, etc.) for each crop.",
        "2. Clean and disinfect storage areas before use.",
        "3. Maintain recommended temperature and humidity levels.",
        "4. Use racks or pallets to keep produce off the ground.",
        "5. Monitor for pests or mold in the storage facility.",
        "6. Implement a stock rotation system to minimize waste.",
        "7. Keep a log of entry and exit dates for all goods.",
        "8. Ensure proper ventilation to prevent condensation.",
        "9. Install alarms or sensors for temperature fluctuations.",
        "10. Inspect stored items regularly and remove any spoiled produce."
      ],
      image: "storage.jpg"
    },
    storage_of_crops: {
      name: "Storage of Crops",
      description: [
        "1. Separate crops by type to prevent cross-contamination.",
        "2. Use breathable packaging for crops that emit moisture.",
        "3. Label each batch with date and variety for traceability.",
        "4. Stack bags or boxes carefully to avoid crushing.",
        "5. Check moisture content of grains to prevent spoilage.",
        "6. Keep rodents and insects away with proper sealing.",
        "7. Use protective materials like netting for delicate produce.",
        "8. Regularly inspect for signs of rot or insect damage.",
        "9. Adjust storage conditions for seasonal changes.",
        "10. Document all storage processes for continuous improvement."
      ],
      image: "storage_of_crops.jpg"
    }
  };

  // TAMIL CONTENT (same topics, each with 10 steps)
  const tamilTopics = {
    harvesting: {
      name: "அறுவடை",
      description: [
        "நிலை 1: பயிர்களின் வளர்ச்சியை தினமும் கண்காணித்து சரியான அறுவடை நேரத்தை தீர்மானிக்கவும்.",
        "நிலை 2: அறுவடை செய்ய பயன்படும் கருவிகளைச் சுத்தமாக வைக்கவும்.",
        "நிலை 3: பணியாளர்களுக்கு பாதுகாப்பான அறுவடை முறைகளை பயிற்சி அளிக்கவும்.",
        "நிலை 4: பயிர்களை மெதுவாக வெட்டி சேதப்படுத்தாதவாறு சேகரிக்கவும்.",
        "நிலை 5: வயலிலேயே பயிர்களை தரப்படி செய்து வகைப்படுத்தவும்.",
        "நிலை 6: அறுவடை அளவு மற்றும் தரத்தைப் பதிவு செய்யவும்.",
        "நிலை 7: அறுவடை செய்யப்பட்ட பயிர்களைப் பாதுகாப்பான வழியில் எடுத்துச்செல்லவும்.",
        "நிலை 8: தக்க வெப்பநிலை மற்றும் ஈரப்பதத்தில் பயிர்களை சேமிக்கவும்.",
        "நிலை 9: தரக்குற்றங்களை தடுக்கும் விதமாக கட்டுப்பாட்டு முறைகளை கடைப்பிடிக்கவும்.",
        "நிலை 10: அறுவடை முறைகளை அடிக்கடி மதிப்பாய்வு செய்து மேம்படுத்தவும்."
      ],
      image: "harvesting.jpg"
    },
    irrigation: {
      name: "பாசனம்",
      description: [
        "நிலை 1: மண் ஈரப்பதம் அளவை மதிப்பாய்வு செய்து பாசன நேரத்தைத் தீர்மானிக்கவும்.",
        "நிலை 2: டிரிப், தெளிப்பு போன்ற சரியான பாசன முறையைத் தேர்ந்தெடுக்கவும்.",
        "நிலை 3: தண்ணீர் பாய்ச்சல் ஒரேபடி இருக்க அமைப்பை வடிவமைக்கவும்.",
        "நிலை 4: குழாய்கள், தெளிப்பான் போன்றவை சரியான முறையில் பொருத்தவும்.",
        "நிலை 5: அதிகமோ குறைவோ நீர் பாய்ச்சல் ஏற்படாதவாறு கண்காணிக்கவும்.",
        "நிலை 6: பாசன உபகரணங்களை அடிக்கடி பராமரித்து சுத்தப்படுத்தவும்.",
        "நிலை 7: நேர நிர்ணயம் அல்லது தானியங்கு முறைகளைப் பயன்படுத்தி பாசனம் செய்யவும்.",
        "நிலை 8: உடைபாடுகள் அல்லது அடைபாடுகள் உள்ளதா என்பதை அடிக்கடி சரிபார்க்கவும்.",
        "நிலை 9: வானிலை நிலையைப் பொருத்து பாசன அளவை மாற்றவும்.",
        "நிலை 10: நீர் பயன்பாட்டைப் பதிவுசெய்து செயல்திறனை உயர்த்தவும்."
      ],
      image: "irrigation.jpg"
    },
    soil_preparation: {
      name: "மண் தயாரிப்பு",
      description: [
        "நிலை 1: மண் pH மற்றும் ஊட்டச்சத்துகளைக் கண்டறிய சோதனை செய்யவும்.",
        "நிலை 2: புல், கற்கள் போன்றவற்றை அகற்றவும்.",
        "நிலை 3: உழுதறவு செய்து மண்ணை மெலிதாக்கவும்.",
        "நிலை 4: புழு உரம் அல்லது கோழிப்பண்டம் போன்ற இயற்கை உரங்களைச் சேர்க்கவும்.",
        "நிலை 5: மண்ணை சமப்படுத்தி தண்ணீர் சீரான முறையில் சென்றடைய வழிவகை செய்யவும்.",
        "நிலை 6: மண் சோதனை முடிவுகளைப் பொறுத்து உரங்களைப் பயன்படுத்தவும்.",
        "நிலை 7: விதை வைப்பதற்கு முன் சில நாட்கள் மண்ணை ஓயவிடவும்.",
        "நிலை 8: தேவைப்பட்டால் உயர் படுக்கை செய்து நீர் வடிகாலுக்கு உதவவும்.",
        "நிலை 9: ஈரப்பதம் பாதுகாக்க சிறு அளவில் மூடி வைக்கவும்.",
        "நிலை 10: தயாரிப்பு நடவடிக்கைகளைப் பதிவுசெய்து பகிரங்கப்படுத்தவும்."
      ],
      image: "soil_preparation.jpg"
    },
    sowing: {
      name: "விதைப்பு",
      description: [
        "நிலை 1: காலநிலை மற்றும் மண்ணைச் சார்ந்த விதைகளைத் தேர்ந்தெடுக்கவும்.",
        "நிலை 2: விதை வைப்பதற்கான ஆழம் மற்றும் இடைவெளியைத் தீர்மானிக்கவும்.",
        "நிலை 3: விதை இடும் கருவிகளைச் சரிசெய்து சரியான அளவில் விதைகளைப் பரப்பவும்.",
        "நிலை 4: சமநிலையான காலநிலையில் விதைகளை விதைக்கவும்.",
        "நிலை 5: விதைகளை பறவைகளிலிருந்து பாதுகாக்க மெதுவாக மண்ணால் மூடவும்.",
        "நிலை 6: விதை முளைச்சலை ஊக்குவிக்க உடனடியாக பாசனம் செய்யவும்.",
        "நிலை 7: முளைச்சல் முழுமையாக வரும்போது பலவீனமான செடிகளை அகற்றவும்.",
        "நிலை 8: மண்ணை ஈரமாக வைத்திருக்கவும் ஆனால் அதிக நீர் தேங்காமல் கவனிக்கவும்.",
        "நிலை 9: தேவையான வழிகளில் தொடக்க உரங்களைப் பயன்படுத்தவும்.",
        "நிலை 10: விதை முளைச்சல் தரவைப் பதிவு செய்து வைக்கவும்."
      ],
      image: "sowing.jpg"
    },
    fertilization: {
      name: "உரமிடுதல்",
      description: [
        "நிலை 1: மண் சோதனையில் குறைவான ஊட்டச்சத்துகளைத் தீர்மானிக்கவும்.",
        "நிலை 2: இயற்கை அல்லது வேதியியல் உரங்களைத் தேர்ந்தெடுக்கவும்.",
        "நிலை 3: பயிர் தேவைக்கு ஏற்ப உர அளவை கணக்கிடவும்.",
        "நிலை 4: பயிரின் வளர்ச்சி கட்டங்களைப் பொறுத்து உரங்களைப் பயன்படுத்தவும்.",
        "நிலை 5: உரங்களை ஒரே தடவையில் அல்லாமல் பிரித்து பயன்படுத்தவும்.",
        "நிலை 6: உரங்களை இடிந்தவுடன் பாசனம் செய்து வேர்களுக்கு ஊட்டச்சத்துகளை அடைய செய்வது சிறந்தது.",
        "நிலை 7: அதிகமான உரம் அல்லது குறைவான உரம் உள்ளதா என்பதை கவனிக்கவும்.",
        "நிலை 8: உரங்களை நீர் ஆதாரங்களிலிருந்து பாதுகாக்கவும்.",
        "நிலை 9: மண்ணின் ஆரோக்கியத்தை மேம்படுத்த உர முறைகளை மாற்றிக்கொண்டே இருக்கவும்.",
        "நிலை 10: உர பயன்படுத்தல் விவரங்களைப் பதிவுசெய்க."
      ],
      image: "fertilization.jpg"
    },
    seed_selection: {
      name: "விதை தேர்வு",
      description: [
        "நிலை 1: பிரதேசத்திற்கேற்ற பயிர் வகைகளை ஆராயவும்.",
        "நிலை 2: விதையின் முளைச்சல் திறனை மற்றும் தரத்தை மதிப்பிடவும்.",
        "நிலை 3: நோய் எதிர்ப்பு திறனும் உழைப்பிற்கேற்ற விதை வகைகளையும் தேர்ந்தெடுக்கவும்.",
        "நிலை 4: பல்வகை விதைகளை ஒப்பிட்டு நல்ல பயிர் தரத்தைப் பெறவும்.",
        "நிலை 5: நம்பகமான விற்பனையாளர்களிடமிருந்து விதைகளை வாங்கவும்.",
        "நிலை 6: விதைகளை உடைப்புண்டோ, வண்ணம் மாறினதோ என்று சரிபார்க்கவும்.",
        "நிலை 7: விதைகளை குளிர்ந்த மற்றும் உலர்ந்த இடத்தில் சேமிக்கவும்.",
        "நிலை 8: பெரிய அளவில் விதைப்பதற்கு முன் சிறு அளவில் பரிசோதனை செய்யவும்.",
        "நிலை 9: பயிர் கால அட்டவணைக்கு ஏற்ப விதை பயன்பாட்டை திட்டமிடவும்.",
        "நிலை 10: ஒவ்வொரு விதைத் தொகுதியின் விவரங்களையும் பதிவு செய்யவும்."
      ],
      image: "seed_selection.jpg"
    },
    harvest_and_store_produce: {
      name: "அறுவடை மற்றும் பயிர்களை சேமித்தல்",
      description: [
        "நிலை 1: பயிர்களை சரியான வளர்ச்சி நிலையில் அறுவடை செய்யவும்.",
        "நிலை 2: அறுவடை கருவிகள் மற்றும் பெட்டிகளைச் சுத்தமாக வைத்திருக்கவும்.",
        "நிலை 3: பயிர்களை அளவு மற்றும் தரப்படி வகைப்படுத்தி சந்தைப்படுத்தவும்.",
        "நிலை 4: உடனடியாக வெப்பநிலையை குறைத்து புதிய எண்ணத்தைத் தரவும்.",
        "நிலை 5: சரியான வெப்பநிலை மற்றும் ஈரப்பதத்தில் பயிர்களை வைத்திருங்கள்.",
        "நிலை 6: எடுத்துச்செல்லும் போது பயிர்கள் சேதமடையாமல் பாதுகாக்கவும்.",
        "நிலை 7: முதலில் வாங்கியதையே முதலில் விற்கும் முறை(FIFO) பின்பற்றவும்.",
        "நிலை 8: தேதிகள் மற்றும் தொகுதி எண்கள் ஒவ்வொன்றையும் ஒட்டிக்கொள்ளவும்.",
        "நிலை 9: சேமிப்பு அறையின் வெப்பநிலை மற்றும் ஈரப்பதத்தை தினமும் கண்காணிக்கவும்.",
        "நிலை 10: சேமிப்பு காலம் மற்றும் இழப்புகளைப் பதிவு செய்து படிப்படியாக மேம்படுத்தவும்."
      ],
      image: "harvest_and_store_produce.jpg"
    },
    autonomous_farming: {
      name: "தானியங்கி விவசாயம்",
      description: [
        "நிலை 1: தானியங்கி கருவிகளுக்கான நில அமைப்பை மதிப்பாய்வு செய்யவும்.",
        "நிலை 2: மண் மற்றும் காலநிலையை கண்காணிக்க ஐஓடி சென்சார்கள் பொருத்தவும்.",
        "நிலை 3: ட்ரோன் மூலம் பயிர் ஆரோக்கியம் மற்றும் பரப்பை கண்காணிக்கவும்.",
        "நிலை 4: விதைப்பு அல்லது அறுவடை போன்ற செயல்களில் ரோபோங்களைப் பயன்படுத்தவும்.",
        "நிலை 5: நேரடி தரவு பகுப்பாய்வுக்கு மென்பொருள் வடிவமைப்பை இணைக்கவும்.",
        "நிலை 6: பணியாளர்களுக்கு தானியங்கி கருவிகள் பயன்பாட்டில் பயிற்சி அளிக்கவும்.",
        "நிலை 7: சாதனங்களில் ஏற்பட்டுள்ள பிழைகளை உடனடியாக சரிசெய்ய அறிவிப்புகளை அமைக்கவும்.",
        "நிலை 8: முதலீடு செலவையும் பலனையும் அடிக்கடி மதிப்பாய்வு செய்யவும்.",
        "நிலை 9: புதிய தானியங்கி தொழில்நுட்பங்களைப் பற்றி தெரிந்து கொள்ளவும்.",
        "நிலை 10: தானியக்க முறைகளின் செயல்திறனை தொடர்ந்து மேம்படுத்தவும்."
      ],
      image: "autonomous_farming.jpg"
    },
    cover_crops: {
      name: "கவர் கிராப்ஸ்",
      description: [
        "நிலை 1: மண்ணின் கட்டமைப்பை மேம்படுத்த உகந்த கவர் கிராப்ஸ் தேர்ந்தெடுக்கவும்.",
        "நிலை 2: முக்கிய பயிர் அறுவடை முடிந்தவுடன் கவர் கிராப்ஸ் விதைக்கவும்.",
        "நிலை 3: மழை இல்லையென்றால் பாசனம் செய்து விதை முளைச்சலை ஊக்குவிக்கவும்.",
        "நிலை 4: அதிகமாக வளர்ச்சி அடைவதற்கு முன்னர் முறையாக வெட்டவோ அல்லது அகற்றவோ செய்யவும்.",
        "நிலை 5: கவர் கிராப்ஸ் அழிந்த பிறகு மண்ணில் கலந்து அதன் ஊட்டச்சத்துகளைப் பெறவும்.",
        "நிலை 6: பல்வேறு வகை கவர் கிராப்ஸ்களை மாற்றி மாற்றி பயிரிடவும்.",
        "நிலை 7: கவர் கிராப்ஸ் பகுதிகளில் பூச்சிகள் அதிகரிக்கிறதா என்பதை கண்காணிக்கவும்.",
        "நிலை 8: கவர் கிராப்ஸ் வளர்ச்சியின் சரியான நேரத்தில் முடிக்கவும்.",
        "நிலை 9: மண்ணின் ஊட்டச்சத்து மாற்றங்களைப் பதிவுசெய்க.",
        "நிலை 10: அடுத்த பயிர் சாகுபடிக்கான கால அட்டவணையை accordingly திட்டமிடவும்."
      ],
      image: "cover_crops.jpg"
    },
    crop: {
      name: "பயிர்",
      description: [
        "நிலை 1: உங்கள் பகுதிக்கு பொருத்தமான பயிர்களை ஆராயவும்.",
        "நிலை 2: சந்தை தேவையைவும் பெறுமானத்தையும் கண்காணிக்கவும்.",
        "நிலை 3: தரமான விதைகள் அல்லது நாற்றுகளை நல்ல தரமான விற்பனையாளர்களிடமிருந்து வாங்கவும்.",
        "நிலை 4: விதை அல்லது நாற்று நடவதற்கு முன் நிலத்தை நன்றாகத் தயார் செய்யவும்.",
        "நிலை 5: பயிருக்கு ஏற்ப நீர் மற்றும் ஊட்டச்சத்து தேவையை திட்டமிடவும்.",
        "நிலை 6: பூச்சி அல்லது நோய் தாக்கத்தைக் கண்டறிந்து தடுக்கவும்.",
        "நிலை 7: வளர்ச்சி கட்டங்களில் உரமிடல் செய்யவும்.",
        "நிலை 8: சரியான நேரத்தில் அறுவடை செய்து தரத்தை உறுதிசெய்க.",
        "நிலை 9: சந்தைப்படுத்துவதற்கான முயற்சிகளை மேற்கொள்ளவும்.",
        "நிலை 10: பயிர் சுழற்சி முடிந்ததும் பகுப்பாய்வு செய்து மேம்படுத்தவும்."
      ],
      image: "crop.jpg"
    },
    crop_growth: {
      name: "பயிர் வளர்ச்சி",
      description: [
        "நிலை 1: பயிரின் வளர்ச்சி கட்டங்களை (விதை, தளிர், மலர்ச்சி, கனிவு) அறியவும்.",
        "நிலை 2: கட்டங்களுக்கு ஏற்ப பாசன, உரம் பயன்பாடு வேறுபடும்.",
        "நிலை 3: வளர்ச்சி ஊக்கிகள் தேவையெனில் பயன்படுத்தவும்.",
        "நிலை 4: வளர்ச்சி வேகத்தை மதிப்பாய்வு செய்து அறுவடை நேரத்தை கணக்கிடவும்.",
        "நிலை 5: செடிகளை செதுக்கி உழைப்பு அதிகரிக்கவும்.",
        "நிலை 6: இலை நிறம் அல்லது தாமத வளர்ச்சி மூலம் ஊட்டச்சத்து குறைபாடுகளை கண்டறியவும்.",
        "நிலை 7: பூச்சி தாக்கம் அதிகரிப்பதை தடுக்க முறைகளை மேற்கொள்ளவும்.",
        "நிலை 8: போதுமான வெளிச்சம் மற்றும் காற்றோட்டம் இருப்பதை உறுதிசெய்க.",
        "நிலை 9: வானிலை மாற்றங்கள் பயிர் வளர்ச்சியை பாதிக்கிறதா என்பதை கண்காணிக்கவும்.",
        "நிலை 10: வளர்ச்சி தரவைப் பதிவு செய்து அடுத்த பருவத்திற்கான திட்டங்களைத் தயாரிக்கவும்."
      ],
      image: "crop_growth.jpg"
    },
    acquire_land: {
      name: "நிலத்தை பெற்றுக்கொள்",
      description: [
        "நிலை 1: பகுதியின் மண் மற்றும் காலநிலையை ஆராயவும்.",
        "நிலை 2: சட்ட விதிமுறைகள் மற்றும் நில பயன்பாடு விவரங்களைச் சரிபார்க்கவும்.",
        "நிலை 3: நிலத்தை நேரில் பார்வையிட்டு உள்ளமைப்புகளை ஆராயவும்.",
        "நிலை 4: தண்ணீர் வாய்ப்பு மற்றும் பாசன ஆதாரங்களை மதிப்பாய்வு செய்யவும்.",
        "நிலை 5: நில உரிமையாளருடன் விலை மற்றும் விவரங்கள் பற்றி பேச்சுவார்த்தை செய்யவும்.",
        "நிலை 6: நில எல்லைகளை சரிபார்க்க சர்வே செய்யவும்.",
        "நிலை 7: சாலைகள் மற்றும் அடிப்படை வசதிகள் உள்ளதா என்பதை பார்க்கவும்.",
        "நிலை 8: சுற்றுச்சூழல் பாதுகாப்பு வழிகாட்டுதல்களைப் பின்பற்றவும்.",
        "நிலை 9: நில அபிவிருத்தி செய்ய தேவையான திட்டங்களை உருவாக்கவும்.",
        "நிலை 10: சட்டப் பத்திரங்கள் மற்றும் உரிமைகளை சரிபார்த்து முடிக்கவும்."
      ],
      image: "acquire_land.jpg"
    },
    land_preparation: {
      name: "நில தயாரிப்பு",
      description: [
        "நிலை 1: நிலத்தைப் பழுதுபடுத்தும் உள்ளமைப்புகளை அகற்றவும்.",
        "நிலை 2: நில எல்லைகளை மதிப்பாய்வு செய்து வரையறுக்கவும்.",
        "நிலை 3: உழுதறவை செய்து மண்ணை குழையாக்கவும்.",
        "நிலை 4: சமன்படுத்தப்பட்ட நீர்பாசனத்தை உறுதி செய்ய நிலத்தை சமப்படுத்தவும்.",
        "நிலை 5: நீர் தேங்குதல் பிரச்சனை இருந்தால் வடிகால் அமைப்பை ஏற்படுத்தவும்.",
        "நிலை 6: இயற்கை உரங்களை சேர்த்து மண்ணின் நன்மையை உயர்த்தவும்.",
        "நிலை 7: மண் சோதனை முடிவுகள் அடிப்படையில் உரம் சேர்க்கவும்.",
        "நிலை 8: விதை வைப்பதற்கு முன் மண்ணை ஓயவிடவும்.",
        "நிலை 9: பூச்சி அல்லது நோய் தாக்கங்கள் உள்ளதா என்பதைப் பரிசீலிக்கவும்.",
        "நிலை 10: இறுதி நிலை முடிந்ததும் விதைப்பு அல்லது நடவு செய்வதற்குத் தயாராகவும்."
      ],
      image: "land_preparation.jpg"
    },
    pest_and_disease_control: {
      name: "பூச்சி மற்றும் நோய் கட்டுப்பாடு",
      description: [
        "நிலை 1: உள்ளூர் பகுதிகளில் உள்ள பூச்சி மற்றும் நோய் வகைகளை அறியவும்.",
        "நிலை 2: வயல்களில் அடிக்கடி சென்று முன்பதிவு செய்யவும்.",
        "நிலை 3: நோய் எதிர்ப்பு உடைய பயிர் வகைகளை தேர்ந்தெடுக்கவும்.",
        "நிலை 4: பயிர் சுழற்சி முறையைக் கொண்டு பூச்சிகள் அதிகரிப்பதைத் தடுக்கவும்.",
        "நிலை 5: இயற்கை பூச்சிக்கொல்லிகளை பயன்படுத்தி வேதிப்பொருள் பயன்பாட்டை குறைக்கவும்.",
        "நிலை 6: பயனுள்ள பூச்சிகளை வளர்த்து சக பூச்சிகளை கட்டுப்படுத்தவும்.",
        "நிலை 7: வேதிப்பொருள் பூச்சிக்கொல்லிகளை அவசியமான போது மட்டுமே பயன்படுத்தவும்.",
        "நிலை 8: வானிலை மாற்றங்கள் பூச்சி நுழைவுக்கு காரணமா என்பதை கவனிக்கவும்.",
        "நிலை 9: கருவிகள் மற்றும் சாதனங்களை சுத்தமாக வைத்திருக்கவும்.",
        "நிலை 10: பூச்சி தாக்கத்தைப் பதிவு செய்து எதிர்காலத்தில் முன்னெச்சரிக்கை நடவடிக்கைகள் எடுக்கவும்."
      ],
      image: "pest_and_disease_control.jpg"
    },
    ploughing: {
      name: "உழுதல்",
      description: [
        "நிலை 1: மண் வகைக்கு ஏற்ற உழுதறவு கருவியைத் தேர்ந்தெடுக்கவும்.",
        "நிலை 2: கருவிகள் முறையாக இயங்குகிறதா என்று பரிசோதிக்கவும்.",
        "நிலை 3: உழுதல் ஆழத்தை பயிர் தேவையைப் பொறுத்து சரிசெய்க.",
        "நிலை 4: மண்ணைச் சரியான வரியில் உழுதறவு செய்யவும்.",
        "நிலை 5: மிக அதிகமோ மிகக் குறைவோ ஈரப்பதம் உள்ளபோது உழுதறவு செய்ய வேண்டாம்.",
        "நிலை 6: பெரிய கற்கள் அல்லது கழிவுகளை அகற்றவும்.",
        "நிலை 7: இருவழிப் பாணியில் உழுதறவு செய்து மண்ணை நன்றாகக் குழையாக்கவும்.",
        "நிலை 8: எரிபொருள் செலவு மற்றும் நேரத்தை மதிப்பாய்வு செய்யவும்.",
        "நிலை 9: உழுதறவுக்குப் பிறகு வயலை சரிபார்த்து வேறுபாடுகள் உள்ளதா என பார்க்கவும்.",
        "நிலை 10: உழுதல் கருவிகளைப் பயன்படுத்திவிட்டு சுத்தமாக பராமரித்து வைக்கவும்."
      ],
      image: "ploughing.jpg"
    },
    product_offering: {
      name: "பொருள் வழங்கல்",
      description: [
        "நிலை 1: சந்தை தேவையை ஆராய்ந்து உகந்த பொருட்களைத் தேர்ந்தெடுக்கவும்.",
        "நிலை 2: உங்களின் விவசாயப் பொருட்களின் வலுப்பகுத்தை அடையாளப்படுத்தவும்.",
        "நிலை 3: அழகான மற்றும் பயனுள்ள பேக்கேஜிங்கை உருவாக்கவும்.",
        "நிலை 4: விலை நிர்ணயத்தை சந்தை நிலை அடிப்படையில் சரிசெய்க.",
        "நிலை 5: ஊடகங்கள் மற்றும் இணையவழி மூலமாக விளம்பரம் செய்யவும்.",
        "நிலை 6: உயர்தர தரத்தைப் பேணுவதன் மூலம் வாடிக்கையாளர் நம்பிக்கையைப் பெறவும்.",
        "நிலை 7: வாடிக்கையாளர் பின்னூட்டங்களைப் பெறவும் மற்றும் செயல்படுத்தவும்.",
        "நிலை 8: பல்வேறு பொருட்களை வழங்கி சந்தை ஆபத்துகளைத் தணிக்கவும்.",
        "நிலை 9: உற்பத்திச் செலவுகள் மற்றும் லாப விகிதங்களை கணக்கிடவும்.",
        "நிலை 10: புதிய பொருட்கள் மற்றும் சேவைகளை அறிமுகப்படுத்தி முன்னணியில் இருக்கவும்."
      ],
      image: "product_offering.jpg"
    },
    storage: {
      name: "சேமிப்பு",
      description: [
        "நிலை 1: ஒவ்வொரு பயிருக்கும் ஏற்ற சேமிப்பு முறையை தேர்ந்தெடுக்கவும் (குளிர், சாதாரண வெப்பநிலை).",
        "நிலை 2: சேமிப்பு அறையை சுத்தம் செய்து கிருமிநாசினிகளைப் பயன்படுத்தவும்.",
        "நிலை 3: பரிந்துரைக்கப்பட்ட வெப்பநிலை மற்றும் ஈரப்பதத்தை பராமரிக்கவும்.",
        "நிலை 4: பயிர்களை தரையில் நேரடியாக வைக்காமல் பலகைகளில் வைக்கவும்.",
        "நிலை 5: பூச்சிகள் மற்றும் பூஞ்சைகளுக்கு கண்காணிப்பு முறை அமைக்கவும்.",
        "நிலை 6: சரியான ஸ்டாக் சுற்றாடலை (FIFO) பின்பற்றவும்.",
        "நிலை 7: எந்தப் பொருள் எப்போது வந்தது என்பதைப் பதிவுசெய்க.",
        "நிலை 8: தணிக்கைகள் மற்றும் பரிசோதனைகள் அடிக்கடி செய்யவும்.",
        "நிலை 9: வெப்பநிலை அதிகமாக இருந்தால் அலாரம் அல்லது சென்சார் அமைக்கவும்.",
        "நிலை 10: சேமிக்கப்பட்ட பொருட்களை அடிக்கடி சரிபார்த்து அழுகல் ஏற்படுகிறதா என்பதைக் கண்டறியவும்."
      ],
      image: "storage.jpg"
    },
    storage_of_crops: {
      name: "பயிர்கள் சேமித்தல்",
      description: [
        "நிலை 1: வேறு வேறு வகை பயிர்களை ஒருங்கிணைக்காமல் ஒவ்வொன்றையும் தனித்தனியாக வைக்கவும்.",
        "நிலை 2: சில பயிர்களுக்கு உகந்த மூச்சு விடும் பைகளைக் கொடுக்கவும்.",
        "நிலை 3: பயிர் மற்றும் தேதி பற்றிய லேபிள்களை ஒட்டவும்.",
        "நிலை 4: பெட்டிகள் மற்றும் பைகளை மிதமான உயரத்தில் அடுக்கி வைக்கவும்.",
        "நிலை 5: தானியங்கள் ஈரப்பதம் அதிகமாக இருந்தால் அழுகல் ஏற்படும் என்பதால் கண்காணிக்கவும்.",
        "நிலை 6: எலி, பூச்சிகள் வராமல்காக்க உறுதிப்படுத்தவும்.",
        "நிலை 7: மென்மையான பயிர்களுக்கு பாதுகாப்பான நெட்டிங் பயன்படுத்தவும்.",
        "நிலை 8: சிதைவு அல்லது பாதிப்பு இருக்கிறதா என்று அடிக்கடி பார்வையிடவும்.",
        "நிலை 9: பருவநிலை மாற்றங்களைப் பொறுத்து சேமிப்பு முறைகளை மாற்றவும்.",
        "நிலை 10: சேமிப்பு செயல்முறைகளைப் பதிவு செய்து மேம்படுத்தவும்."
      ],
      image: "storage_of_crops.jpg"
    }
  };

  // -------------------------------------
  //  Combine English & Tamil
  // -------------------------------------
  const guidanceContent = {
    english: {
      title: "🌱 Farming Guidance (விவசாய வழிகாட்டல்)",
      procedure: [
        "Step 1: Select your preferred language (English or Tamil).",
        "Step 2: Browse through the available farming guidance topics.",
        "Step 3: Click on a topic to view detailed information below that topic.",
        "Step 4: Read the step-by-step procedures for each farming process.",
        "Step 5: View accompanying images for visual guidance.",
        "Step 6: Learn about modern technologies and best practices.",
        "Step 7: Follow organic and sustainable farming methods.",
        "Step 8: Maintain records of your farming activities.",
        "Step 9: Review and update your practices regularly.",
        "Step 10: Use the guidance to optimize farm productivity."
      ],
      topics: englishTopics
    },
    tamil: {
      title: "🌱 விவசாய வழிகாட்டல் (Farming Guidance)",
      procedure: [
        "நிலை 1: உங்கள் விருப்பமான மொழியை தேர்ந்தெடுக்கவும் (ஆங்கிலம் அல்லது தமிழ்).",
        "நிலை 2: கிடைக்கும் விவசாய வழிகாட்டல் தலைப்புகளைப் பார்வையிடவும்.",
        "நிலை 3: விவரங்களைப் பார்க்க ஒரு தலைப்பை கிளிக் செய்யவும்.",
        "நிலை 4: ஒவ்வொரு செயல்முறைக்கும் படிப்படியாக வழிமுறைகளைப் படிக்கவும்.",
        "நிலை 5: ஒவ்வொரு தொழில்நுட்பத்திற்கும் சம்பந்தப்பட்ட படங்களைப் பார்வையிடவும்.",
        "நிலை 6: நவீன தொழில்நுட்பங்கள் மற்றும் சிறந்த நடைமுறைகளை அறிக.",
        "நிலை 7: இயற்கை மற்றும் நிலைத்த விவசாய முறைகளைப் பின்பற்றவும்.",
        "நிலை 8: உங்களின் விவசாய செயல்பாடுகளை பதிவுசெய்க.",
        "நிலை 9: தங்களின் நடைமுறைகளை அடிக்கடி மீளாய்வு செய்து மேம்படுத்தவும்.",
        "நிலை 10: விவசாய உற்பத்தியை மேம்படுத்த இந்த வழிகாட்டலைப் பயன்படுத்தவும்."
      ],
      topics: tamilTopics
    }
  };

  // -------------------------------------
  //  RENDERING THE COMPONENT
  // -------------------------------------
  return (
    <div className="guidance-container">
      <h2>{guidanceContent[language].title}</h2>

      {/* Language Switch Buttons */}
      <div className="language-buttons">
        <button
          onClick={() => {
            setSelectedTopic(null); // reset selected topic when switching language
            setLanguage('english');
          }}
        >
          English (ஆங்கிலம்)
        </button>
        <button
          onClick={() => {
            setSelectedTopic(null); // reset selected topic when switching language
            setLanguage('tamil');
          }}
        >
          தமிழ்
        </button>
      </div>

      {/* General Procedure */}
      <div className="procedure-list">
        <h3>General Guidance Procedure</h3>
        <ul>
          {guidanceContent[language].procedure.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Topics List - each topic expands below its button */}
      <div className="topics-list">
        {Object.entries(guidanceContent[language].topics).map(([key, topic]) => (
          <div key={key} className="topic-item">
            <button
              onClick={() => setSelectedTopic(selectedTopic === key ? null : key)}
            >
              {topic.name}
            </button>
            {selectedTopic === key && (
              <div className="guidance-section">
                <h3>{topic.name}</h3>
                <img
                  src={`/images/${topic.image}`}
                  alt={key}
                  style={{ maxWidth: '400px', margin: '1rem 0' }}
                />
                <ul>
                  {topic.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">
        🔙 Back to Dashboard (மீண்டும் முதன்மை பக்கத்திற்குத் திரும்பவும்)
      </Link>
    </div>
  );
}

export default Guidance;
