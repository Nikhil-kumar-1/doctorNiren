import React from 'react';
import { Link } from 'react-router-dom';

const ProstateCancer = () => {
  return (
    <div className="prostate-cancer-page bg-white text-gray-800">
      {/* Banner Section */}
      <div className="relative bg-blue-600 text-white h-96 flex items-center justify-start px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/human-kidneys-decorative-model-pastel-blue-background-chronic-kidney-disease-kidn-generative-ai_874904-50249.jpg?ga=GA1.1.943868341.1721631842&semt=ais_hybrid')" }}></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl text-blue-900 font-bold leading-tight mb-4">Prostate Cancer Specialist in Delhi</h1>
          <p className="text-lg text-black mb-6">Comprehensive and advanced prostate cancer treatment options by leading specialists in Delhi.</p>
          <Link to="/appointment" className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg">Book Appointment</Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold my-6">About Prostate Cancer</h2>
        <p>
          The prostate is a small walnut-sized gland, which is a part of the male reproductive system. The main function of the prostate is to produce the seminal fluid, which forms a major part of the ejaculate. This contains substances that help in liquefying the ejaculate, hence helping the sperms to reach the female reproductive tract. Like other parts of the body, cancer can also develop in the prostate gland. It is the most common cancer amongst men, affecting about 1 million males in India every year. If detected early, it can be treated. But, any delay in its diagnosis enables it to spread across the bones and lymph nodes of the body.
        </p>

        <h2 className="text-2xl font-semibold my-6">What are the symptoms of prostate cancer?</h2>
        <p>
          In most cases, prostate cancer does not cause any symptoms. In fact, these days more and more cases of early prostate cancers are being detected because of the routinely prescribed PSA test by physicians as part of the annual health check-up after a certain age. If prostate cancer does cause any symptoms, they are indistinguishable from benign prostate hyperplasia, the non-cancerous enlargement of the prostate, which causes urinary trouble. Cancer can lead to death if not early diagnosed and treated properly. Please consult with your family if your body reflects any cancer symptoms and opt for the best Prostate Cancer treatment in Delhi to get rid of this deadly disease.
        </p>

        <h3 className="text-xl font-semibold mt-8">The symptoms are:</h3>
        <ul className="list-disc pl-8">
          <li>Decreased force of urination or a weak urinary stream</li>
          <li>Straining to pass urine</li>
          <li>Sense of incomplete emptying</li>
          <li>Frequency of micturition</li>
          <li>Urgent desire to pass urine, which may also be associated with incontinence at times</li>
          <li>Nocturia is the frequent passing of urine during the night</li>
          <li>Blood in semen or urine</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">In advanced cases when the disease has spread to the bones or lymph nodes, other symptoms may occur, such as:</h3>
        <ul className="list-disc pl-8">
          <li>Bone pains (legs, back, hips, etc.)</li>
          <li>Fractures may occur in bones weakened by the spread of the cancer</li>
          <li>Weakness in the legs due to compression of the spinal column</li>
          <li>Incontinence of urine due to compression of the spinal column</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">How can you treat prostate cancer?</h2>
        <p>
          Depending on the stage of cancer, age of the patient, and the overall fitness levels of the patient, there are various options available for prostate cancer treatment in Saket, such as:
        </p>

        <h3 className="text-xl font-semibold mt-8">A) Active surveillance and watchful waiting</h3>
        <p>
          In some patients, particularly with an early stage and grade of the disease, prostate cancer grows very slowly. So much so that they may never need any treatment for the disease. For such patients, the prostate specialist may recommend either watchful waiting or active surveillance for a period of time.
        </p>
        <ul className="list-disc pl-8">
          <li><strong>WATCHFUL WAITING:</strong> No treatment is advised, and no further tests are recommended. Patients are treated only if any symptoms show up due to an enlarged prostate.</li>
          <li><strong>ACTIVE SURVEILLANCE:</strong> No treatment is indicated, but the patient is kept under observation. A PSA test and digital rectal examination are done every 6 months, and once a year, a repeat prostate biopsy is done. If the results signify an increase in the quantum of the disease, then the treatment is initiated.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">B) Prostate cancer surgery (radical prostatectomy)</h3>
        <p>
          In early stages and grades of prostate cancer, surgery for removal of the prostate gland is an option. The entire prostate gland and seminal vesicles are removed, and in selected cases, lymph node dissection is done. This can be done by:
        </p>
        <ul className="list-disc pl-8">
          <li>Open surgery</li>
          <li>Laparoscopic surgery</li>
          <li>Robot-assisted laparoscopic surgery</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">C) Radiation therapy</h3>
        <p>
          In this treatment modality, high-energy rays or particles are used to kill the cancer cells. It is used as a first line of treatment for the cancer confined to the prostate, as a first-line treatment along with hormonal therapy for tumors that have spread outside the prostate involving adjacent organs such as seminal vesicles, and after surgical removal of the prostate (radical prostatectomy) if the biopsy report suggests that some amount of tumor is still left behind (positive margins). Intensity Modulated Radiation Therapy (IMRT) or Image-Guided Radiation Therapy (IGRT) is used to guide radiation delivery specifically to diseased cells to kill the cancerous tissue.
        </p>

        <h3 className="text-xl font-semibold mt-8">D) Hormonal therapy</h3>
        <p>
          Prostate cancer cell growth is stimulated by androgens secreted in the body, mainly by the testicles but also in a small amount by the adrenal glands. Androgen deprivation therapy is used to deprive the cancer cells of the stimulus to grow. A combined androgen blockade is given, which includes both androgen deprivation (medical or surgical castration) as well as the use of anti-androgens.
        </p>
        <p>
          Hormone therapy is usually used if:
        </p>
        <ul className="list-disc pl-8">
          <li>The disease has spread outside the prostate, that is, the disease has metastasized.</li>
          <li>If the disease comes back after surgery or radiation therapy.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">E) Chemotherapy</h3>
        <p>
          Chemotherapy drugs are anti-cancer drugs given either orally or by injections. They are mainly used when prostate cancer has spread beyond the prostate, involving other parts of the body. The intent is not to cure the patient but to halt the further spread of the disease and to palliate symptoms caused by the spread of the disease.
        </p>

        <h3 className="text-xl font-semibold mt-8">F) Treating prostate cancer spread to the bones</h3>
        <p>
          Prostate cancer tends to spread to the bones. This can lead to bone aches, which can be very severe. Also, pathological fractures can happen in the affected bones. In such cases, drugs called bisphosphonates are used to relieve the pain, halt the spread of the disease, and strengthen the bones to prevent pathological fractures. At times, even radiation therapy needs to be used to decrease the pain.
        </p>

        <p>
          Dr. Niren Rao is a highly-skilled, well-trained urologic oncologist and one of the best Prostate Cancer Specialists in Delhi. With the blend of conventional robotic techniques and his team of well-trained surgeons, he ensures that the patient lives longer and healthier.
        </p>

        <h2 className="text-2xl font-semibold my-6">Stage-by-stage options for prostate cancer treatment in Saket, Delhi:</h2>
        <h3 className="text-xl font-semibold mt-8">STAGE I</h3>
        <ul className="list-disc pl-8">
          <li>If the patient wishes for a non-invasive treatment:
            <ul className="list-disc pl-8">
              <li>Active surveillance</li>
              <li>Watchful waiting</li>
            </ul>
          </li>
          <li>If the patient desires an active treatment:
            <ul className="list-disc pl-8">
              <li>Radical prostatectomy</li>
              <li>Radiation therapy</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">STAGE II</h3>
        <ul className="list-disc pl-8">
          <li>Radical prostatectomy</li>
          <li>Radiation therapy</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">STAGE III</h3>
        <ul className="list-disc pl-8">
          <li>Radiation and hormonal therapy</li>
          <li>Radical prostatectomy in selected cases</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">STAGE IV</h3>
        <ul className="list-disc pl-8">
          <li>Hormone therapy</li>
          <li>Hormone plus radiation therapy</li>
          <li>Chemotherapy</li>
          <li>Surgery (TURP) to relieve the symptoms of the enlarged prostate.</li>
        </ul>

        <h2 className="text-2xl font-semibold my-6">How much does prostate cancer surgery cost in Delhi?</h2>
        <p>
          The prostate cancer surgery cost in Delhi at Dr. Niren Rao’s practice is as follows:
        </p>
        <ul className="list-disc pl-8">
          <li>Laparoscopic radical prostatectomy starts at Rs. 2 lakh.</li>
          <li>Channel TURP at Rs. 50,000</li>
          <li>Bilateral orchiectomy at Rs. 30,000</li>
        </ul>

        <p>
          For more details about prostate cancer surgery or its cost, consult Dr. Niren Rao, the leading urologist in Delhi, at Dr. Niren Rao’s Urology Practice in Saket, Delhi.
        </p>

        <Link to="/appointment" className="btn-appointment bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-full shadow-lg mt-8 inline-block">Book Appointment</Link>
      </div>
    </div>
  );
};

export default ProstateCancer;