import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Info, Paperclip, X } from 'lucide-react';
import { siteSettings } from '../data/site';
import { FadeIn } from '../components/MotionPrimitives';
import { PageMeta } from '../components/PageMeta';

const INQUIRY_TYPES = [
  '정원 설계 (Garden Design)',
  '정원 시공 (Garden Construction)',
  '설계 및 시공 일괄 (Design & Construction)',
  '정원 유지관리 (Garden Care)',
  '협업 및 기타 문의 (Collaboration / Other)',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  location: string;
  scale: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  inquiryType: INQUIRY_TYPES[2],
  location: '',
  scale: '',
  message: '',
  consent: false,
};

export function InquiryPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedPreview, setSubmittedPreview] = useState<FormState | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setAttachedFile(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!form.name.trim()) {
      setErrorMsg('성함 또는 담당자명을 입력해 주세요.');
      return;
    }

    if (!form.email.trim() && !form.phone.trim()) {
      setErrorMsg('회신받으실 이메일 또는 전화번호 중 하나 이상을 입력해 주세요.');
      return;
    }

    if (!form.message.trim()) {
      setErrorMsg('문의 내용을 간략히 작성해 주세요.');
      return;
    }

    if (!form.consent) {
      setErrorMsg('개인정보 수집 및 이용 안내에 동의해 주세요.');
      return;
    }

    // Phase 1 Prototype: Do NOT pretend to save to DB or send email.
    setSubmittedPreview(form);
  };

  return (
    <div className="bg-[#F7F8F6] text-[#383515] pt-24 md:pt-32 pb-24 md:pb-32">
      <PageMeta
        title="PROJECT INQUIRY | UNFOLD GREEN"
        description="정원 설계, 시공, 유지관리 및 협업 문의를 위한 UNFOLD GREEN 프로젝트 문의 페이지입니다."
      />

      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <FadeIn>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.06em] text-[#6B6665] hover:text-[#383515] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO CONTACT</span>
          </Link>

          <div className="space-y-4 mb-10">
            <p className="text-xs font-medium tracking-[0.12em] text-[#778732]">
              PROJECT INQUIRY
            </p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-[#383515]">
              정원 프로젝트 문의하기
            </h1>
            <p className="text-[15px] text-[#6B6665] leading-relaxed max-w-2xl">
              상세한 주소나 도면, 현장 사진이 없더라도 괜찮습니다. 현재 구상 중인 공간의 성격과 원하시는 방향을 편하게 적어주세요.
            </p>
          </div>

          {/* Honest Phase 1 Prototype Notice */}
          <div
            role="note"
            className="mb-10 p-4 md:p-5 border border-[#86A2B1]/40 bg-[#86A2B1]/10 rounded-sm flex items-start gap-3 text-sm text-[#383515]"
          >
            <Info className="w-4 h-4 text-[#86A2B1] mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="font-medium">Phase 1 프로토타입 안내</p>
              <p className="text-xs md:text-sm text-[#6B6665] leading-relaxed">
                현재 화면은 UI 및 입력 흐름 검증을 위한 프로토타입 단계입니다. 양식을 제출해도 서버에 저장되거나 실제 이메일이 발송되지 않으며, 실제 상담을 원하시면{' '}
                <a
                  href={`mailto:${siteSettings.contact.email}`}
                  className="text-[#383515] underline hover:text-[#778732]"
                >
                  {siteSettings.contact.email}
                </a>
                으로 직접 연락하실 수 있습니다.
              </p>
            </div>
          </div>
        </FadeIn>

        {submittedPreview ? (
          <FadeIn>
            <div className="p-8 md:p-10 border border-[#778732]/40 bg-[#EAECE6]/50 rounded-sm space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#778732] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h2 className="text-xl font-medium text-[#383515]">
                    문의 양식 입력 확인 완료 (프로토타입 미리보기)
                  </h2>
                  <p className="text-sm text-[#6B6665] leading-relaxed">
                    Phase 1 프로토타입에서는 실제 데이터베이스 저장 및 메일 발송이 이루어지지 않습니다. 향후 Phase 3 운영 단계에서는 관리자 문의함에 안전하게 저장되고 접수 알림이 연결됩니다.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#383515]/12 text-sm">
                <div>
                  <dt className="text-xs text-[#6B6665]">이름</dt>
                  <dd className="font-medium mt-0.5">{submittedPreview.name}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#6B6665]">문의 유형</dt>
                  <dd className="font-medium mt-0.5">{submittedPreview.inquiryType}</dd>
                </div>
                {submittedPreview.email && (
                  <div>
                    <dt className="text-xs text-[#6B6665]">이메일</dt>
                    <dd className="font-medium mt-0.5">{submittedPreview.email}</dd>
                  </div>
                )}
                {submittedPreview.phone && (
                  <div>
                    <dt className="text-xs text-[#6B6665]">전화번호</dt>
                    <dd className="font-medium mt-0.5">{submittedPreview.phone}</dd>
                  </div>
                )}
                {submittedPreview.location && (
                  <div>
                    <dt className="text-xs text-[#6B6665]">장소</dt>
                    <dd className="font-medium mt-0.5">{submittedPreview.location}</dd>
                  </div>
                )}
                {submittedPreview.scale && (
                  <div>
                    <dt className="text-xs text-[#6B6665]">공간 규모</dt>
                    <dd className="font-medium mt-0.5">{submittedPreview.scale}</dd>
                  </div>
                )}
                {attachedFile && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#6B6665]">첨부 참고 이미지</dt>
                    <dd className="font-medium mt-0.5">{attachedFile.name}</dd>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <dt className="text-xs text-[#6B6665]">문의 내용</dt>
                  <dd className="mt-1 text-[#383515] whitespace-pre-line leading-relaxed">
                    {submittedPreview.message}
                  </dd>
                </div>
              </dl>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedPreview(null);
                    setForm(INITIAL_FORM);
                    setAttachedFile(null);
                  }}
                  className="px-5 py-2.5 min-h-[44px] text-sm font-medium bg-[#383515] text-[#F7F8F6] rounded-sm hover:bg-[#778732] transition-colors"
                >
                  새 문의 입력 테스트하기
                </button>
                <Link
                  to="/projects"
                  className="px-5 py-2.5 min-h-[44px] inline-flex items-center text-sm font-medium border border-[#383515]/20 text-[#383515] rounded-sm hover:border-[#778732] transition-colors"
                >
                  프로젝트 둘러보기
                </Link>
              </div>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.05}>
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Name + Inquiry Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-[#383515]">
                    이름 <span className="text-[#778732]">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="성함 또는 업체·담당자명"
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-[#383515]">
                    문의 유형
                  </label>
                  <select
                    id="inquiry-type"
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-[#F7F8F6] border border-[#383515]/25 rounded-sm text-[#383515] focus:outline-none focus:border-[#778732]"
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact: Email or Phone (at least one required) */}
              <fieldset className="space-y-3 border-t border-[#383515]/10 pt-6">
                <legend className="text-sm font-medium text-[#383515]">
                  연락처 <span className="text-xs font-normal text-[#6B6665]">(이메일 또는 전화번호 중 하나 이상 필수)</span>
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="inquiry-email" className="block text-xs text-[#6B6665]">
                      이메일
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="inquiry-phone" className="block text-xs text-[#6B6665]">
                      전화번호
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732]"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Location & Scale (Optional — no strict address required) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#383515]/10 pt-6">
                <div className="space-y-2">
                  <label htmlFor="inquiry-location" className="block text-sm font-medium text-[#383515]">
                    장소 <span className="text-xs font-normal text-[#6B6665]">(선택 · 지역 단위 기재 가능)</span>
                  </label>
                  <input
                    id="inquiry-location"
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="예: 서울 성북구, 경기도 판교 등"
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiry-scale" className="block text-sm font-medium text-[#383515]">
                    공간 규모 <span className="text-xs font-normal text-[#6B6665]">(선택)</span>
                  </label>
                  <input
                    id="inquiry-scale"
                    type="text"
                    value={form.scale}
                    onChange={(e) => setForm({ ...form, scale: e.target.value })}
                    placeholder="예: 약 15평 테라스, 주택 마당 등"
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 border-t border-[#383515]/10 pt-6">
                <label htmlFor="inquiry-message" className="block text-sm font-medium text-[#383515]">
                  문의 내용 <span className="text-[#778732]">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="공간의 형태, 원하시는 정원의 분위기, 희망 시기 등을 편하게 남겨주세요."
                  className="w-full px-4 py-3 text-sm bg-transparent border border-[#383515]/25 rounded-sm text-[#383515] placeholder:text-[#6B6665]/60 focus:outline-none focus:border-[#778732] leading-relaxed"
                />
              </div>

              {/* Optional Reference Image */}
              <div className="space-y-2">
                <span className="block text-sm font-medium text-[#383515]">
                  참고 이미지 <span className="text-xs font-normal text-[#6B6665]">(선택)</span>
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] text-xs font-medium border border-[#383515]/25 rounded-sm text-[#383515] hover:border-[#778732] cursor-pointer transition-colors">
                    <Paperclip className="w-3.5 h-3.5" />
                    <span>이미지 파일 선택</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  {attachedFile && (
                    <span className="inline-flex items-center gap-2 text-xs text-[#6B6665]">
                      <span>{attachedFile.name}</span>
                      <button
                        type="button"
                        aria-label="첨부 파일 제거"
                        onClick={() => setAttachedFile(null)}
                        className="p-1 text-[#383515] hover:text-[#778732]"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}
                </div>
              </div>

              {/* Privacy Consent */}
              <div className="p-5 border border-[#383515]/12 bg-[#EAECE6]/35 rounded-sm space-y-3">
                <p className="text-xs font-medium text-[#383515]">
                  개인정보 수집·이용 안내
                </p>
                <p className="text-xs text-[#6B6665] leading-relaxed">
                  수집 항목: 이름, 이메일 또는 전화번호, 문의 관련 장소·규모 정보. 수집 목적: 정원 프로젝트 상담 및 회신. 입력하신 정보는 상담 목적 달성 후 지체 없이 파기하며, 외부에 공개하거나 제3자에게 제공하지 않습니다.
                </p>
                <label className="inline-flex items-center gap-2.5 pt-1 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="w-4 h-4 accent-[#778732]"
                  />
                  <span className="text-xs md:text-sm font-medium text-[#383515]">
                    개인정보 수집 및 이용 안내에 동의합니다. <span className="text-[#778732]">*</span>
                  </span>
                </label>
              </div>

              {errorMsg && (
                <p role="alert" className="text-sm text-[#8F3A2B] font-medium">
                  {errorMsg}
                </p>
              )}

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-xs text-[#6B6665]">
                  * 표시는 필수 입력 항목입니다.
                </span>
                <button
                  type="submit"
                  className="px-7 py-3 min-h-[46px] text-sm font-medium bg-[#383515] text-[#F7F8F6] rounded-sm hover:bg-[#778732] transition-colors whitespace-nowrap"
                >
                  문의 내용 확인하기
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
