function ModalEditCategory({ isOpen, onClose, category }) {
  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 z-2000 flex justify-end bg-black/50">
      <div className="flex h-full w-[90%] flex-col overflow-y-auto border-l border-(--border-color-gray) bg-(--bg-color-white) sm:w-full sm:max-w-105">
        <div className="sticky top-0 flex shrink-0 items-center justify-between border-b border-(--border-color-gray) bg-(--bg-color-gray) px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex flex-col gap-1">
            <span className="font-['IBM_Plex_Mono'] text-xs tracking-widest text-(--font-color-gray-light)">EDIT CATEGORY</span>
            <h2 className="font-['Fraunces'] text-lg font-semibold text-(--font-color-black)">{category.name}</h2>
          </div>
          <button type="button" onClick={onClose} className="text-xl text-(--font-color-gray)">×</button>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5">
          <div className="flex flex-col gap-1">
            <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">CATEGORY NAME</label>
            <input type="text" defaultValue={category.name} className="w-full rounded-xl border border-(--border-color-green) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">RESPONSIBLE AGENCY</label>
            <select defaultValue={category.bureau} className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)">
              <option value="Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)">Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)</option>
              <option value="Perumda PAM JAYA (Clean Drinking Water)">Perumda PAM JAYA (Clean Drinking Water)</option>
              <option value="Dinas Perhubungan DKI Jakarta (PJU & Traffic)">Dinas Perhubungan DKI Jakarta (PJU & Traffic)</option>
              <option value="Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)">Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)</option>
              <option value="Dinas Pertamanan dan Hutan Kota DKI Jakarta">Dinas Pertamanan dan Hutan Kota DKI Jakarta</option>
              <option value="Satpol PP Provinsi DKI Jakarta (Public Order)">Satpol PP Provinsi DKI Jakarta (Public Order)</option>
              <option value="Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)">Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">SLA WINDOW (HOURS)</label>
              <input type="number" defaultValue={parseInt(category.target)} className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">ICON</label>
              <select defaultValue={category.icon || "General"} className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)">
                <option>General</option>
                <option>Warning</option>
                <option>Roads</option>
                <option>Water</option>
                <option>Lighting</option>
                <option>Sanitation</option>
                <option>Environment</option>
                <option>Safety</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">CITIZEN-FACING LABEL</label>
            <input type="text" defaultValue={category.description} className="w-full rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-2.5 text-xs text-(--font-color-black) outline-none focus:border-(--border-color-green)" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-['IBM_Plex_Mono'] text-xs font-semibold tracking-wider text-(--font-color-gray)">CITIZEN HINT</label>
            <textarea rows="4" defaultValue={category.hint || ""} placeholder="Short examples shown on the filing wizard" className="w-full resize-none rounded-xl border border-(--border-color-gray) bg-(--bg-color-white) px-3 py-3 text-xs leading-relaxed text-(--font-color-black) outline-none placeholder:text-(--font-color-gray-light) focus:border-(--border-color-green)" />
          </div>

          <div className="mt-auto flex flex-col-reverse items-stretch gap-2 border-t border-(--border-color-gray) pt-4 sm:flex-row sm:items-center sm:justify-end">
            <button type="button" onClick={onClose} className="w-full rounded-full border border-(--border-color-gray) px-4 py-2 text-xs font-semibold text-(--font-color-black) sm:w-auto">Cancel</button>
            <button type="button" className="w-full rounded-full bg-(--bg-color-green) px-4 py-2 text-xs font-semibold text-(--font-color-white) sm:w-auto">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditCategory;