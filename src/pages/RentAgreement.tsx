import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useState } from "react";

type OwnerDetails = {
  fullName: string;
  mobile: string;
  address: string;
};

type TenantDetails = {
  fullName: string;
  mobile: string;
  address: string;
};

type PropertyDetails = {
  state: string;
  city: string;
  pincode: string;
  address: string;
  items: { name: string; qty: string }[];
};

type AgreementTerms = {
  monthlyRent: string;
  securityDeposit: string;
  lockInMonths: string;
  noticeMonths: string;
  validityMonths: string;
  startDate: string; // yyyy-mm-dd
  createdBy: "Owner" | "Tenant";
  email: string;
};

type Annexures = {
  notes: string;
};

const steps = ["Owner Details", "Tenant Details", "Property Details", "Agreement Terms", "Annexures", "Preview"] as const;
type Step = typeof steps[number];

const RentAgreement = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const [owner, setOwner] = useState<OwnerDetails>({ fullName: "", mobile: "", address: "" });
  const [tenant, setTenant] = useState<TenantDetails>({ fullName: "", mobile: "", address: "" });
  const [property, setProperty] = useState<PropertyDetails>({ state: "Gujarat", city: "", pincode: "", address: "", items: [{ name: "", qty: "" }] });
  const [terms, setTerms] = useState<AgreementTerms>({ monthlyRent: "", securityDeposit: "", lockInMonths: "", noticeMonths: "", validityMonths: "", startDate: new Date().toISOString().slice(0,10), createdBy: "Owner", email: "" });
  const [annex, setAnnex] = useState<Annexures>({ notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pdfUrl, setPdfUrl] = useState<string | undefined>(undefined);
  const [isGenerating, setIsGenerating] = useState(false);

  const currentStep: Step = steps[stepIdx];

  const INDIAN_STATES = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  const isTenDigits = (v: string) => /^\d{10}$/.test(v);
  const isSixDigits = (v: string) => /^\d{6}$/.test(v);
  const isNumber = (v: string) => /^\d+$/.test(v);
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validateStep = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (currentStep === "Owner Details") {
      if (!owner.fullName.trim()) nextErrors.ownerFullName = "Required";
      if (!isTenDigits(owner.mobile)) nextErrors.ownerMobile = "Enter 10 digit mobile";
      if (!owner.address.trim()) nextErrors.ownerAddress = "Required";
    }
    if (currentStep === "Tenant Details") {
      if (!tenant.fullName.trim()) nextErrors.tenantFullName = "Required";
      if (!isTenDigits(tenant.mobile)) nextErrors.tenantMobile = "Enter 10 digit mobile";
      if (!tenant.address.trim()) nextErrors.tenantAddress = "Required";
    }
    if (currentStep === "Property Details") {
      if (!property.city.trim()) nextErrors.city = "Required";
      if (!isSixDigits(property.pincode)) nextErrors.pincode = "6 digits required";
      if (!property.address.trim()) nextErrors.propertyAddress = "Required";
      property.items.forEach((it, idx) => {
        if (it.qty && !isNumber(it.qty)) nextErrors[`itemQty-${idx}`] = "Digits only";
      });
    }
    if (currentStep === "Agreement Terms") {
      if (!isNumber(terms.monthlyRent)) nextErrors.monthlyRent = "Digits only";
      if (!isNumber(terms.securityDeposit)) nextErrors.securityDeposit = "Digits only";
      if (!isNumber(terms.lockInMonths)) nextErrors.lockInMonths = "Digits only";
      if (!isNumber(terms.noticeMonths)) nextErrors.noticeMonths = "Digits only";
      if (!isNumber(terms.validityMonths)) nextErrors.validityMonths = "Digits only";
      if (!isEmail(terms.email)) nextErrors.email = "Invalid email";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const canContinue = useMemo(() => {
    switch (currentStep) {
      case "Owner Details":
        return owner.fullName && isTenDigits(owner.mobile) && owner.address;
      case "Tenant Details":
        return tenant.fullName && isTenDigits(tenant.mobile) && tenant.address;
      case "Property Details":
        return property.state && property.city && isSixDigits(property.pincode) && property.address;
      case "Agreement Terms":
        return isNumber(terms.monthlyRent) && isNumber(terms.securityDeposit) && isNumber(terms.lockInMonths) && isNumber(terms.noticeMonths) && isNumber(terms.validityMonths) && terms.startDate && isEmail(terms.email);
      case "Annexures":
        return true;
      default:
        return true;
    }
  }, [currentStep, owner, tenant, property, terms]);

  const onNext = () => {
    if (!validateStep()) return;
    setStepIdx((i) => Math.min(i + 1, steps.length - 1));
  };
  const onBack = () => setStepIdx((i) => Math.max(i - 1, 0));

  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch {
      return iso;
    }
  };

  const calcEndDate = () => {
    try {
      const start = new Date(terms.startDate);
      const months = parseInt(terms.validityMonths || "0", 10);
      if (isNaN(months) || !months) return "";
      const end = new Date(start);
      end.setMonth(end.getMonth() + months);
      return formatDate(end.toISOString());
    } catch {
      return "";
    }
  };

  const ensureHtml2Pdf = async (): Promise<void> => {
    if ((window as any).html2pdf) return;
    await new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js";
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load html2pdf"));
      document.body.appendChild(s);
    });
  };

  const buildTemplateHtml = (): HTMLElement => {
    const container = document.createElement("div");
    container.style.padding = "24px";
    container.style.maxWidth = "800px";
    container.style.margin = "0 auto";
    container.style.fontFamily = "Times New Roman, serif";
    const currentDate = formatDate(new Date().toISOString());
    const endDate = calcEndDate();
    container.innerHTML = `
      <div style="text-align:center; margin-bottom: 12px;"><h1 style="font-weight:700; text-decoration:underline;">RENTAL AGREEMENT</h1></div>
      <p style="text-align:justify; line-height:1.6;">THIS RENTAL AGREEMENT is executed at <b>${property.city || "{city}"}</b>, <b>${property.state || "{state}"}</b> on <b>${currentDate}</b> by and between <b>${owner.fullName || "{landlord name}"}</b> residing at <b>${owner.address || "{owner address}"}</b> (hereinafter jointly and severally called the "LANDLORD"), which expression shall include their heirs, legal representatives, successors and assigns) of the one part;</p>
      <p style="text-align:justify; line-height:1.6;">AND <b>${tenant.fullName || "{tenant name}"}</b>, having permanent address at <b>${tenant.address || "{tenant address}"}</b>; and having (hereinafter called the "TENANT", which expression shall include its legal representatives, successors and assigns) of the other part.</p>
      <h3 style="margin-top:16px;">THIS DEED WITNESSETH AS FOLLOWS:</h3>
      <ol style="line-height:1.6; padding-left:20px;">
        <li>The rent in respect of the "Demised Premises" shall commence from <b>${formatDate(terms.startDate)}</b> and shall be valid till <b>${endDate || "{rent end date}"}</b> (hereinafter "Rent Period"). Thereafter, the same may be extended further on mutual consent of both the parties.</li>
        <li>That the Tenant shall pay to the Landlord a monthly rent of Rs. <b>${terms.monthlyRent || "{rent amount}"}</b> (hereinafter "Rent"). The Rent shall be paid in advance Monthly on or before 10 of Every Month.</li>
        <li>During the Rent period, utilities used by the Tenant shall be paid as per actuals.</li>
        <li>Servicing & repair of any appliances or fixtures provided by the Landlord will be the responsibility of the Tenant.</li>
        <li>The Tenant will pay to the Landlord a refundable security deposit of Rs. <b>${terms.securityDeposit || "{security deposit}"}</b>.</li>
        <li>The Tenant shall not sublet or assign the premises; to be used for bona fide residential purposes only.</li>
        <li>No structural changes without prior written consent of the Landlord.</li>
        <li>The Landlord may visit the premises for inspection with prior 24 hours' notice.</li>
        <li>This Rent Agreement cannot be terminated by either party for a period of <b>${terms.lockInMonths || "{lock in period}"}</b> months from the <b>${formatDate(terms.startDate)}</b> ("Lock in Period"). After completion, it may be terminated by giving <b>${terms.noticeMonths || "{notice period}"}</b> months' notice.</li>
      </ol>
      <p style="margin-top:24px;">IN WITNESS WHEREOF the parties hereto have executed these presents on the day and year first above written.</p>
      <div style="display:flex; justify-content:space-between; margin-top:60px;">
        <div>
          <div><b>LANDLORD SIGNATURE:</b></div>
          <div style="margin-top:40px;">${owner.fullName || "{ownername}"}</div>
        </div>
        <div>
          <div><b>TENANT SIGNATURE:</b></div>
          <div style="margin-top:40px; text-align:right;">${tenant.fullName || "{tenant name}"}</div>
        </div>
      </div>
    `;
    return container;
  };

  const generatePdf = async () => {
    try {
      setIsGenerating(true);
      await ensureHtml2Pdf();
      const element = buildTemplateHtml();
      const opt = {
        margin:       10,
        filename:     `rent-agreement-${Date.now()}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      } as any;
      const instance = (window as any).html2pdf().set(opt).from(element);
      const blob: Blob = await instance.output('blob');
      const url = URL.createObjectURL(blob);
      setPdfUrl((old) => {
        if (old) URL.revokeObjectURL(old);
        return url;
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadPdf = async () => {
    await ensureHtml2Pdf();
    const element = buildTemplateHtml();
    const opt = {
      margin: 10,
      filename: `rent-agreement-${Date.now()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as any;
    (window as any).html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-24 pb-16 font-sans">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Rent Agreement</h1>
          <p className="text-muted-foreground mt-2 text-sm">Fill details step-by-step and preview the agreement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {steps.map((s, i) => (
                    <li key={s} className={`flex items-center gap-2 text-sm ${i === stepIdx ? "font-semibold" : i < stepIdx ? "text-green-600" : "text-muted-foreground"}`}>
                      <span className={`h-2 w-2 rounded-full ${i <= stepIdx ? "bg-primary" : "bg-muted"}`} />
                      {s}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{currentStep}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === "Owner Details" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name<span className="text-red-600">*</span></Label>
                      <Input value={owner.fullName} onChange={(e) => setOwner({ ...owner, fullName: e.target.value })} placeholder="Owner full name" />
                    </div>
                    <div>
                      <Label>Mobile Number<span className="text-red-600">*</span></Label>
                      <Input value={owner.mobile} onChange={(e) => setOwner({ ...owner, mobile: e.target.value.replace(/\D/g, "") })} placeholder="9999999999" />
                      <p className={`text-xs mt-1 ${errors.ownerMobile ? "text-red-600" : "text-muted-foreground"}`}>{errors.ownerMobile || "Enter a valid 10-digit phone number"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <Label>Address<span className="text-red-600">*</span></Label>
                      <Textarea value={owner.address} onChange={(e) => setOwner({ ...owner, address: e.target.value })} placeholder="Owner address" />
                      {errors.ownerAddress && <p className="text-xs text-red-600 mt-1">{errors.ownerAddress}</p>}
                    </div>
                  </div>
                )}

                {currentStep === "Tenant Details" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name<span className="text-red-600">*</span></Label>
                      <Input value={tenant.fullName} onChange={(e) => setTenant({ ...tenant, fullName: e.target.value })} placeholder="Tenant full name" />
                    </div>
                    <div>
                      <Label>Mobile Number<span className="text-red-600">*</span></Label>
                      <Input value={tenant.mobile} onChange={(e) => setTenant({ ...tenant, mobile: e.target.value.replace(/\D/g, "") })} placeholder="9999999999" />
                      <p className={`text-xs mt-1 ${errors.tenantMobile ? "text-red-600" : "text-muted-foreground"}`}>{errors.tenantMobile || "Enter a valid 10-digit phone number"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <Label>Address<span className="text-red-600">*</span></Label>
                      <Textarea value={tenant.address} onChange={(e) => setTenant({ ...tenant, address: e.target.value })} placeholder="Tenant address" />
                      {errors.tenantAddress && <p className="text-xs text-red-600 mt-1">{errors.tenantAddress}</p>}
                    </div>
                  </div>
                )}

                {currentStep === "Property Details" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>State<span className="text-red-600">*</span></Label>
                        <Select value={property.state} onValueChange={(v) => setProperty({ ...property, state: v })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDIAN_STATES.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>City<span className="text-red-600">*</span></Label>
                        <Input value={property.city} onChange={(e) => setProperty({ ...property, city: e.target.value })} />
                        {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label>Pincode<span className="text-red-600">*</span></Label>
                        <Input value={property.pincode} onChange={(e) => setProperty({ ...property, pincode: e.target.value.replace(/\D/g, "").slice(0,6) })} />
                        <p className={`text-xs mt-1 ${errors.pincode ? "text-red-600" : "text-muted-foreground"}`}>{errors.pincode || "Enter a valid 6-digit PIN code"}</p>
                      </div>
                      <div>
                        <Label>House & Street Address<span className="text-red-600">*</span></Label>
                        <Input value={property.address} onChange={(e) => setProperty({ ...property, address: e.target.value })} />
                        {errors.propertyAddress && <p className="text-xs text-red-600 mt-1">{errors.propertyAddress}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Furniture / Appliances Provided</Label>
                      <div className="space-y-3">
                        {property.items.map((it, idx) => (
                          <div key={idx} className="grid grid-cols-12 gap-3">
                            <Input className="col-span-7" placeholder="Item (e.g., fan)" value={it.name} onChange={(e) => {
                              const items = [...property.items];
                              items[idx] = { ...items[idx], name: e.target.value };
                              setProperty({ ...property, items });
                            }} />
                            <Input className="col-span-3" placeholder="Qty" value={it.qty} onChange={(e) => {
                              const items = [...property.items];
                              items[idx] = { ...items[idx], qty: e.target.value.replace(/\D/g, "") };
                              setProperty({ ...property, items });
                            }} />
                            {errors[`itemQty-${idx}`] && <p className="col-span-12 text-xs text-red-600">{errors[`itemQty-${idx}`]}</p>}
                            <Button variant="secondary" className="col-span-2" onClick={() => {
                              const items = property.items.filter((_, i) => i !== idx);
                              setProperty({ ...property, items: items.length ? items : [{ name: "", qty: "" }] });
                            }}>Remove</Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" onClick={() => setProperty({ ...property, items: [...property.items, { name: "", qty: "" }] })}>Add another item</Button>
                    </div>
                  </div>
                )}

                {currentStep === "Agreement Terms" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Monthly Rent<span className="text-red-600">*</span></Label>
                      <Input value={terms.monthlyRent} onChange={(e) => setTerms({ ...terms, monthlyRent: e.target.value.replace(/\D/g, "") })} />
                      {errors.monthlyRent && <p className="text-xs text-red-600 mt-1">{errors.monthlyRent}</p>}
                    </div>
                    <div>
                      <Label>Security Deposit<span className="text-red-600">*</span></Label>
                      <Input value={terms.securityDeposit} onChange={(e) => setTerms({ ...terms, securityDeposit: e.target.value.replace(/\D/g, "") })} />
                      {errors.securityDeposit && <p className="text-xs text-red-600 mt-1">{errors.securityDeposit}</p>}
                    </div>
                    <div>
                      <Label>Lock In Period (months)<span className="text-red-600">*</span></Label>
                      <Input value={terms.lockInMonths} onChange={(e) => setTerms({ ...terms, lockInMonths: e.target.value.replace(/\D/g, "") })} />
                      {errors.lockInMonths && <p className="text-xs text-red-600 mt-1">{errors.lockInMonths}</p>}
                    </div>
                    <div>
                      <Label>Notice Period (months)<span className="text-red-600">*</span></Label>
                      <Input value={terms.noticeMonths} onChange={(e) => setTerms({ ...terms, noticeMonths: e.target.value.replace(/\D/g, "") })} />
                      {errors.noticeMonths && <p className="text-xs text-red-600 mt-1">{errors.noticeMonths}</p>}
                    </div>
                    <div>
                      <Label>Agreement Validity (months)<span className="text-red-600">*</span></Label>
                      <Input value={terms.validityMonths} onChange={(e) => setTerms({ ...terms, validityMonths: e.target.value.replace(/\D/g, "") })} />
                      {errors.validityMonths && <p className="text-xs text-red-600 mt-1">{errors.validityMonths}</p>}
                    </div>
                    <div>
                      <Label>Agreement Start Date<span className="text-red-600">*</span></Label>
                      <Input type="date" value={terms.startDate} onChange={(e) => setTerms({ ...terms, startDate: e.target.value })} />
                    </div>
                    <div>
                      <Label>Created By<span className="text-red-600">*</span></Label>
                      <Select value={terms.createdBy} onValueChange={(v) => setTerms({ ...terms, createdBy: v as AgreementTerms["createdBy"] })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Owner">Owner</SelectItem>
                          <SelectItem value="Tenant">Tenant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Email<span className="text-red-600">*</span></Label>
                      <Input type="email" value={terms.email} onChange={(e) => setTerms({ ...terms, email: e.target.value })} />
                      <p className={`text-xs mt-1 ${errors.email ? "text-red-600" : "text-muted-foreground"}`}>{errors.email || "Enter a valid email address"}</p>
                    </div>
                  </div>
                )}

                {currentStep === "Annexures" && (
                  <div className="space-y-3">
                    <Label>Additional Notes</Label>
                    <Textarea value={annex.notes} onChange={(e) => setAnnex({ notes: e.target.value })} placeholder="Optional annexure notes" />
                  </div>
                )}

                {currentStep === "Preview" && (
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <h2 className="text-2xl font-semibold mb-2">Rental Agreement</h2>
                      <p>
                        This Rental Agreement is executed at {property.city || "[City]"}, {property.state || "[State]"} on {new Date(terms.startDate || Date.now()).toLocaleDateString()} between {owner.fullName || "[Owner Name]"} residing at {owner.address || "[Owner Address]"} ("Landlord") and {tenant.fullName || "[Tenant Name]"} residing at {tenant.address || "[Tenant Address]"} ("Tenant").
                      </p>
                      <h3 className="font-semibold mt-4">1. Rent and Deposit</h3>
                      <p>The Tenant shall pay monthly rent of Rs. {terms.monthlyRent || "____"}. A refundable security deposit of Rs. {terms.securityDeposit || "____"} shall be paid to the Landlord.</p>
                      <h3 className="font-semibold mt-4">2. Term</h3>
                      <p>The Agreement is valid for {terms.validityMonths || "__"} months starting from {new Date(terms.startDate || Date.now()).toLocaleDateString()} with a lock-in period of {terms.lockInMonths || "__"} months and notice period of {terms.noticeMonths || "__"} months.</p>
                      <h3 className="font-semibold mt-4">3. Premises</h3>
                      <p>The premises is located at {property.address || "[Premises Address]"}, {property.city || "[City]"} - {property.pincode || "[Pincode]"}, {property.state || "[State]"}.</p>
                      {property.items.filter(it => it.name || it.qty).length > 0 && (
                        <>
                          <h3 className="font-semibold mt-4">4. Furniture / Appliances Provided</h3>
                          <ul className="list-disc pl-6">
                            {property.items.filter(it => it.name || it.qty).map((it, i) => (
                              <li key={i}>{it.name || "[Item]"} - Qty: {it.qty || "__"}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {annex.notes && (
                        <>
                          <h3 className="font-semibold mt-4">Annexures</h3>
                          <p>{annex.notes}</p>
                        </>
                      )}
                      <p className="mt-6 text-sm text-muted-foreground">Created by: {terms.createdBy} | Email copy will be sent to: {terms.email || "[email]"}</p>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <Button onClick={generatePdf} disabled={isGenerating}>{isGenerating ? "Generating..." : "Generate PDF Preview"}</Button>
                      <Button variant="secondary" onClick={downloadPdf}>Download PDF</Button>
                    </div>
                    {pdfUrl && (
                      <div className="border rounded-md overflow-hidden">
                        <iframe title="Rent Agreement PDF" src={pdfUrl} className="w-full h-[800px]" />
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <Button variant="secondary" onClick={onBack} disabled={stepIdx === 0}>Back</Button>
                  {stepIdx < steps.length - 1 ? (
                    <Button onClick={onNext} disabled={!canContinue}>Save & Continue</Button>
                  ) : (
                    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Scroll to Top</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentAgreement;


