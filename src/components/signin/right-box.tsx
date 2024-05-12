'use client'
import { useState } from 'react';
import { fb_logo } from '@/components/icons/signin/facebook_icon';

function RightBox() {
   const [loading, setLoading] = useState(false);

   return (
      <div className="flex flex-col items-center gap-5">
         <p className="text-black text-center font-sf-pro-display text-[20px] font-light normal-case">SuperReply requires certain permissions to build<br /> automations with Instagram. Click the button to<br /> grant them.</p>
         <button className="w-[365px] h-[49px] bg-[#0084FF] hover:bg-[#006BCE] rounded-[10px] flex justify-center items-center gap-2" disabled={loading}>
            {loading ? (
               <div className="loader"></div>
            ) : (
               <div>{fb_logo}</div>
            )}
            <div className="text-white text-[18px] font-medium normal-case font-sf-pro-display">Continue with Facebook</div>
         </button>
         <p className="text-black text-center font-sf-pro-display text-[16px] font-light normal-case">
            By signing up, you agree to SuperReply&apos;s<br />
            <a href="/terms-of-service" className="text-[#0084FF] font-medium hover:text-[#006BCE]">Terms of Service</a> and
            <a href="/privacy-policy" className="text-[#0084FF] font-medium hover:text-[#006BCE]"> Privacy Policy</a>
         </p>

      </div>
   );
}

export default RightBox;
