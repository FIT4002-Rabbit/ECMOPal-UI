<script>
    import {isOverlayOpen} from "../stores/OverlayStore.js";
</script>
<div class="w-screen h-screen fixed z-10 top-0 left-0 justify-centre items-centre">
    <div class = "bg-gray-900 text-white rounded-md px-8 py-10 relative mw-large opacity-95">
        <button class = "absolute bottom-2 left-3 text-base text-orange-400" on:click={() => isOverlayOpen.set(false)}>
            Accept
        </button>
        <b>What is ECMO PAL?</b><br>
        ECMO PAL is an Artificial Intelligence (deep neural network) model that predicts survival outcomes for VA-ECMO patients. ECMO PAL uses only pre-ECMO variables to make a prediction about patient survival to discharge. The more data you enter, the more accurate the prediction will be.
        <br><br>
        <b>General advice and disclaimer</b><br>
        The tool is designed to be used by a healthcare professional in a clinical setting and may not be appropriate for the general public. This tool is for informational purposes only, is general in nature, and does account for individual circumstances. This tool has not been evaluated for decision-making in any clinical trial and offers no guarantees in accuracy or utility. Past performance may not be an indicator of future performance. The authors and affiliates of this software assume no responsibility or liability for any damages, perceived or real, from the access and use of this software. User discretion is advised.
        <br><br>
        <b>More information</b><br>
        For more information see our publication at  doi.org/10.1007/s00134-023-07157-x or contact andrew.stephens@monash.edu
    </div>
</div>