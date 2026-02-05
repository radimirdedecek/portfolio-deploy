// ----------------------------------------------------------------------
// --------------------- B O O K M A R K S  -----------------------------
// ----------------------------------------------------------------------
const darkTextColor = '#E5E7EB'; // Light gray/white for text
const darkGridColor = 'rgba(255, 255, 255, 0.2)'; // Faint white grid lines
const barWeightedColor = 'hsla(181, 71%, 71%, 0.80)'; // Teal/Cyan color (Used for CV bars)
const barRawColor = 'rgba(191, 193, 194, 0.7)'; // Light gray muted color (Not used here, but kept for reference)
const darkBgColor = '#1F2937'; // Slate 800 (For plot background)

const staticSelectors = '#iabout, #icontact, #itop';
const dynamicSelectors = window.CONTENT_SECTION_IDS.map(tech => `#${tech}`).join(', ');
const allSelectors = staticSelectors + ', ' + dynamicSelectors;

/* ---------------------------------------------------------------------- */
/*                               sleep                                    */
/* ---------------------------------------------------------------------- */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

