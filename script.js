document.addEventListener('DOMContentLoaded',()=>{
  const downloadBtn = document.querySelector('.download');
  if(downloadBtn){
    downloadBtn.addEventListener('click',()=>{
      // simple UI feedback
      downloadBtn.textContent = 'Preparing download... ⏳';
      setTimeout(()=> downloadBtn.textContent = 'Download APK ⬇️',1500);
    });
  }
  // Reference code handling
  const REF_CODE = 'raven11';
  const refEl = document.getElementById('refCode');
  const refInline = document.getElementById('refInline');
  const copyBtn = document.getElementById('copyRef');
  if(refEl) refEl.textContent = REF_CODE;
  if(refInline) refInline.textContent = REF_CODE;
  if(copyBtn){
    copyBtn.addEventListener('click',async()=>{
      try{
        await navigator.clipboard.writeText(REF_CODE);
        copyBtn.textContent = 'Copied ✅';
        setTimeout(()=> copyBtn.textContent = 'Copy',1200);
      }catch(e){
        copyBtn.textContent = 'Copy failed';
        setTimeout(()=> copyBtn.textContent = 'Copy',1200);
      }
    });
  }
});
