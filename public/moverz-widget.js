(function () {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  function onReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    }
  }

  function getApiUrl() {
    var script = document.currentScript;
    var apiBase;

    try {
      if (script && script.src) {
        apiBase = new URL(script.src).origin;
      } else {
        apiBase = window.location.origin;
      }
    } catch (e) {
      apiBase = window.location.origin;
    }

    return apiBase.replace(/\/+$/, "") + "/api/widget/photo-inventory";
  }

  function createRoot(options) {
    var target =
      document.querySelector("[data-moverz-widget-root]") ||
      document.getElementById("moverz-widget-root") ||
      document.body;

    var host = document.createElement("div");
    host.className = "mzw-host";
    target.appendChild(host);

    if (host.attachShadow) {
      var shadow = host.attachShadow({ mode: "open" });
      mountWidget(shadow, options);
    } else {
      mountWidget(host, options);
    }
  }

  function mountWidget(root, options) {
    var apiUrl = options.apiUrl || getApiUrl();

    var style = document.createElement("style");
    style.textContent = [
      ".mzw-root { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif; color: #0f172a; }",
      ".mzw-card { background: #f9fafb; border-radius: 24px; padding: 20px 16px 16px; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18); color: #0f172a; max-width: 420px; min-height: 420px; display: flex; flex-direction: column; }",
      ".mzw-header { margin-bottom: 16px; }",
      ".mzw-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: rgba(16, 185, 129, 0.08); color: #047857; font-size: 11px; font-weight: 500; }",
      ".mzw-badge-dot { width: 6px; height: 6px; border-radius: 999px; background: #22c55e; box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25); }",
      ".mzw-title { margin-top: 10px; font-size: 18px; font-weight: 600; }",
      ".mzw-subtitle { margin-top: 4px; font-size: 13px; color: #4b5563; }",
      ".mzw-dropzone { margin-top: 16px; border-radius: 18px; border: 1px dashed rgba(148, 163, 184, 0.8); background: #f1f5f9; padding: 18px 14px; text-align: center; transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease; }",
      ".mzw-dropzone.mzw-dropzone--active { border-color: #22c55e; background: #e0f2fe; box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.15); }",
      ".mzw-drop-icon { width: 32px; height: 32px; border-radius: 999px; background: rgba(59, 130, 246, 0.08); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 8px; }",
      ".mzw-drop-icon-inner { width: 18px; height: 18px; border-radius: 6px; border: 1.5px solid #22c55e; display: flex; align-items: center; justify-content: center; font-size: 13px; }",
      ".mzw-drop-title { font-size: 14px; font-weight: 500; }",
      ".mzw-drop-helper { margin-top: 4px; font-size: 12px; color: #6b7280; }",
      ".mzw-drop-limit { margin-top: 2px; font-size: 11px; color: #9ca3af; }",
      ".mzw-camera { margin-top: 14px; border-radius: 16px; border: 1px solid rgba(148, 163, 184, 0.8); background: #020617; padding: 10px 10px 12px; }",
      ".mzw-camera-header { display: flex; justify-content: space-between; align-items: center; gap: 8px; }",
      ".mzw-camera-text { font-size: 11px; color: #e5e7eb; }",
      ".mzw-camera-actions { margin-top: 6px; display: flex; gap: 6px; align-items: center; }",
      ".mzw-camera-pill-btn { border-radius: 999px; padding: 5px 10px; font-size: 11px; font-weight: 500; border: 1px solid rgba(148, 163, 184, 0.9); background: #020617; color: #e5e7eb; cursor: pointer; }",
      ".mzw-camera-pill-btn-primary { border-color: #22c55e; background: rgba(34, 197, 94, 0.15); color: #bbf7d0; }",
      ".mzw-camera-pill-btn-secondary { border-color: rgba(148, 163, 184, 0.9); background: transparent; color: #e5e7eb; }",
      ".mzw-camera-video-wrapper { margin-top: 8px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(148, 163, 184, 0.8); background: #000000; }",
      ".mzw-camera-video { width: 100%; height: 210px; object-fit: cover; background: #000000; }",
      ".mzw-camera-cta-row { margin-top: 6px; display: flex; justify-content: space-between; align-items: center; gap: 8px; }",
      ".mzw-camera-counter { font-size: 11px; color: #9ca3af; }",
      ".mzw-photos-row { margin-top: 10px; display: flex; gap: 8px; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; }",
      ".mzw-photo-pill { border-radius: 999px; background: #e5f0ff; border: 1px solid rgba(148, 163, 184, 0.8); padding: 4px 9px; font-size: 11px; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; color: #111827; }",
      ".mzw-photo-pill-count { width: 18px; height: 18px; border-radius: 999px; background: rgba(59, 130, 246, 0.15); display: flex; align-items: center; justify-content: center; font-size: 11px; }",
      ".mzw-photo-pill-remove { cursor: pointer; opacity: 0.65; }",
      ".mzw-summary { margin-top: 10px; display: flex; justify-content: flex-end; }",
      ".mzw-summary-pill { font-size: 11px; padding: 4px 10px; border-radius: 999px; background: rgba(191, 219, 254, 0.9); color: #1d4ed8; font-weight: 500; }",
      ".mzw-footer { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }",
      ".mzw-primary-btn { position: relative; overflow: hidden; border: none; border-radius: 999px; padding: 11px 14px; font-size: 14px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(120deg, #22c55e, #06b6d4); color: #0f172a; box-shadow: 0 12px 25px rgba(34, 197, 94, 0.35); transition: transform 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease; }",
      ".mzw-primary-btn[disabled] { opacity: 1; cursor: default; box-shadow: 0 12px 25px rgba(34, 197, 94, 0.35); }",
      ".mzw-primary-btn-inner { position: relative; z-index: 2; display: inline-flex; align-items: center; justify-content: center; gap: 8px; }",
      ".mzw-progress-mask { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.12); pointer-events: none; border-radius: inherit; transform: translateZ(0); width: 0%; opacity: 0; }",
      ".mzw-primary-btn:not([disabled]):hover { transform: translateY(-1px); box-shadow: 0 16px 30px rgba(34, 197, 94, 0.45); }",
      ".mzw-primary-btn-chevron { font-size: 13px; }",
      ".mzw-small-text { font-size: 11px; color: #94a3b8; text-align: center; }",
      ".mzw-error { margin-top: 8px; font-size: 12px; color: #b91c1c; }",
      ".mzw-results { margin-top: 10px; border-radius: 16px; background: #f1f5f9; border: 1px solid rgba(148, 163, 184, 0.8); padding: 8px 6px 6px; max-height: 260px; overflow: auto; color: #0f172a; }",
      ".mzw-results-header { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; margin-bottom: 8px; }",
      ".mzw-results-title { font-size: 13px; font-weight: 500; color: #0f172a; }",
      ".mzw-results-pill { font-size: 11px; color: #1d4ed8; background: rgba(191, 219, 254, 0.9); border-radius: 999px; padding: 2px 8px; }",
      ".mzw-results-list { display: flex; flex-direction: column; gap: 6px; }",
      ".mzw-item { border-radius: 12px; background: #ffffff; padding: 8px 9px; border: 1px solid rgba(148, 163, 184, 0.8); }",
      ".mzw-item-header { display: flex; justify-content: space-between; gap: 8px; align-items: center; }",
      ".mzw-item-label { font-size: 12px; font-weight: 500; color: #0f172a; }",
      ".mzw-item-badges { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }",
      ".mzw-chip { border-radius: 999px; background: rgba(59, 130, 246, 0.08); padding: 1px 6px; font-size: 10px; color: #1d4ed8; }",
      ".mzw-chip-outline { border-radius: 999px; border: 1px solid rgba(148, 163, 184, 0.8); padding: 1px 6px; font-size: 10px; color: #111827; background: #f9fafb; }",
      ".mzw-item-body { margin-top: 4px; font-size: 11px; color: #4b5563; display: flex; flex-direction: column; gap: 2px; }",
      ".mzw-item-subdetails { margin-top: 3px; font-size: 10px; color: #6b7280; }",
      ".mzw-loading { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: #e5f4ff; }",
      ".mzw-spinner { width: 14px; height: 14px; border-radius: 999px; border: 2px solid rgba(148, 163, 184, 0.6); border-top-color: #22c55e; animation: mzw-spin 0.7s linear infinite; }",
      "@keyframes mzw-spin { to { transform: rotate(360deg); } }",
      "@media (max-width: 640px) { .mzw-card { max-width: 100%; padding: 18px 16px 14px; } }",
    ].join("");

    var wrapper = document.createElement("div");
    wrapper.className = "mzw-root";
    wrapper.innerHTML =
      '<div class="mzw-card">' +
      '  <div class="mzw-header">' +
      '    <div class="mzw-badge"><span class="mzw-badge-dot"></span><span>IA Moverz · Volume estimé</span></div>' +
      '    <div class="mzw-title">Vos photos, notre IA fait le reste</div>' +
      '    <div class="mzw-subtitle">Testez avec jusqu’à 3 photos, on estime le volume et la valeur de vos meubles.</div>' +
      "  </div>" +
      '  <div class="mzw-summary" id="mzw-summary" style="display:none"></div>' +
      '  <div class="mzw-dropzone" id="mzw-dropzone">' +
      '    <div class="mzw-drop-title">Glissez vos photos ici</div>' +
      '    <div class="mzw-drop-helper">ou cliquez pour choisir dans votre galerie</div>' +
      '    <div class="mzw-drop-limit">Jusqu’à 3 photos • photos standard de smartphone (JPG, JPEG, PNG, WEBP, HEIC, HEIF)</div>' +
      "  </div>" +
      '  <input type="file" id="mzw-file-input" accept="image/*" multiple style="display:none" />' +
      '  <div class="mzw-photos-row" id="mzw-photos-row" style="display:none"></div>' +
      '  <div class="mzw-footer">' +
      '    <div class="mzw-results" id="mzw-results" style="display:none">' +
      '      <div class="mzw-results-header">' +
      '        <div class="mzw-results-title" id="mzw-results-title">Inventaire estimé</div>' +
      '        <div class="mzw-results-pill" id="mzw-results-pill"></div>' +
      "      </div>" +
      '      <div class="mzw-results-list" id="mzw-results-list"></div>' +
      "    </div>" +
      '    <button class="mzw-primary-btn" id="mzw-analyze-btn" disabled>' +
      '      <div class="mzw-progress-mask" id="mzw-progress-mask"></div>' +
      '      <div class="mzw-primary-btn-inner">' +
      '        <span id="mzw-analyze-label">Lancer l’analyse</span>' +
      '        <span class="mzw-primary-btn-chevron">→</span>' +
      "      </div>" +
      "    </button>" +
      '    <div class="mzw-small-text">Gratuit · Sans inscription · Résultat en &lt; 60 secondes</div>' +
      '    <div class="mzw-error" id="mzw-error" style="display:none"></div>' +
      "  </div>" +
      "</div>";

    root.appendChild(style);
    root.appendChild(wrapper);

    var headerEl = root.querySelector(".mzw-header");
    var dropzone = root.getElementById("mzw-dropzone");
    var fileInput = root.getElementById("mzw-file-input");
    var photosRow = root.getElementById("mzw-photos-row");
    var analyzeBtn = root.getElementById("mzw-analyze-btn");
    var analyzeLabel = root.getElementById("mzw-analyze-label");
    var errorEl = root.getElementById("mzw-error");
    var resultsEl = root.getElementById("mzw-results");
    var resultsListEl = root.getElementById("mzw-results-list");
    var resultsPillEl = root.getElementById("mzw-results-pill");
    var progressMaskEl = root.getElementById("mzw-progress-mask");

    /** @type {File[]} */
    var selectedFiles = [];
    var isAnalyzing = false;
    var hasResults = false;

    // Détection d'un pointeur "grossier" (mobile/tablette) pour décider si on
    // privilégie la caméra comme entrée principale.
    var isCoarsePointer = false;
    try {
      if (typeof window !== "undefined" && window.matchMedia) {
        var pointerMql = window.matchMedia("(pointer: coarse)");
        isCoarsePointer = !!pointerMql.matches;
        if (pointerMql.addEventListener) {
          pointerMql.addEventListener("change", function (event) {
            isCoarsePointer = !!event.matches;
          });
        }
      }
    } catch (e) {
      // on ignore les erreurs de matchMedia
    }

    var cameraSupported =
      typeof navigator !== "undefined" &&
      !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    var cameraActive = false;
    var cameraUnavailable = false;
    var cameraWrapper = null;
    var cameraVideo = null;
    var cameraOpenBtn = null; // conservé pour compat, mais plus affiché
    var cameraCloseBtn = null;
    var cameraCaptureBtn = null;
    var cameraCounterText = null;
    var cameraStream = null;

    function setError(msg) {
      if (!msg) {
        errorEl.style.display = "none";
        errorEl.textContent = "";
        return;
      }
      errorEl.style.display = "block";
      errorEl.textContent = msg;
    }

    function updatePhotosUI() {
      if (!selectedFiles.length) {
        photosRow.style.display = "none";
        photosRow.innerHTML = "";
      } else {
        photosRow.style.display = "flex";
        photosRow.innerHTML = "";
        selectedFiles.forEach(function (file, index) {
          var pill = document.createElement("div");
          pill.className = "mzw-photo-pill";

          var count = document.createElement("div");
          count.className = "mzw-photo-pill-count";
          count.textContent = String(index + 1);

          var name = document.createElement("span");
          // On n'affiche plus le nom complet du fichier (trop long sur mobile),
          // juste un label générique compact.
          name.textContent = "Photo " + (index + 1);

          var remove = document.createElement("span");
          remove.className = "mzw-photo-pill-remove";
          remove.textContent = "x";
          remove.addEventListener("click", function () {
            selectedFiles.splice(index, 1);
            updatePhotosUI();
            updateAnalyzeDisabled();
          });

          pill.appendChild(count);
          pill.appendChild(name);
          pill.appendChild(remove);
          photosRow.appendChild(pill);
        });
      }
    }

    function updateAnalyzeDisabled() {
      // Bouton désactivé uniquement pendant l'analyse en cours.
      analyzeBtn.disabled = isAnalyzing;
    }

    function stopCamera() {
      cameraActive = false;
      if (cameraStream) {
        try {
          cameraStream.getTracks().forEach(function (track) {
            try {
              track.stop();
            } catch (e) {}
          });
        } catch (e) {}
        cameraStream = null;
      }
      if (cameraVideo) {
        cameraVideo.srcObject = null;
      }
    }

    function fallbackToGallery() {
      stopCamera();
      if (cameraWrapper) {
        cameraWrapper.style.display = "none";
      }
      if (dropzone) {
        dropzone.style.display = "block";
      }
    }

    function ensureCameraUI() {
      if (cameraWrapper || !dropzone) return;

      cameraWrapper = document.createElement("div");
      cameraWrapper.className = "mzw-camera";

      var header = document.createElement("div");
      header.className = "mzw-camera-header";

      var info = document.createElement("p");
      info.className = "mzw-camera-text";
      info.textContent =
        "Recommandations : 3 à 5 photos par pièce. Tout ce qui est vu sera pris en compte.";

      var actions = document.createElement("div");
      actions.className = "mzw-camera-actions";

      cameraCloseBtn = document.createElement("button");
      cameraCloseBtn.type = "button";
      cameraCloseBtn.className =
        "mzw-camera-pill-btn mzw-camera-pill-btn-secondary";
      cameraCloseBtn.textContent = "Utiliser ma galerie";

      // On ne propose plus de bouton "Ouvrir la caméra" : la caméra est
      // déclenchée directement au clic sur la dropzone. On garde uniquement
      // "Utiliser ma galerie" comme option secondaire.
      actions.appendChild(cameraCloseBtn);

      header.appendChild(info);
      header.appendChild(actions);

      var videoWrapper = document.createElement("div");
      videoWrapper.className = "mzw-camera-video-wrapper";

      cameraVideo = document.createElement("video");
      cameraVideo.className = "mzw-camera-video";
      cameraVideo.playsInline = true;
      cameraVideo.autoplay = true;
      cameraVideo.muted = true;

      videoWrapper.appendChild(cameraVideo);

      var ctaRow = document.createElement("div");
      ctaRow.className = "mzw-camera-cta-row";

      cameraCaptureBtn = document.createElement("button");
      cameraCaptureBtn.type = "button";
      cameraCaptureBtn.className =
        "mzw-camera-pill-btn mzw-camera-pill-btn-primary";
      cameraCaptureBtn.textContent = "Prendre une photo";

      cameraCounterText = document.createElement("span");
      cameraCounterText.className = "mzw-camera-counter";
      cameraCounterText.textContent =
        "0 / 3 photos (max pour ce widget de démonstration)";

      ctaRow.appendChild(cameraCaptureBtn);
      ctaRow.appendChild(cameraCounterText);

      cameraWrapper.appendChild(header);
      cameraWrapper.appendChild(videoWrapper);
      cameraWrapper.appendChild(ctaRow);

      cameraWrapper.style.display = "none";

      dropzone.parentNode.insertBefore(cameraWrapper, dropzone.nextSibling);

      cameraCloseBtn.addEventListener("click", function () {
        fallbackToGallery();
      });

      cameraCaptureBtn.addEventListener("click", function () {
        captureFromCamera();
      });
    }

    function updateCameraCounter() {
      if (!cameraCounterText) return;
      cameraCounterText.textContent =
        selectedFiles.length +
        " / 3 photos (max pour ce widget de démonstration)";
    }

    function startCamera() {
      if (!cameraSupported || cameraActive) return;
      setError("");
      cameraActive = true;
      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: { ideal: "environment" } },
          audio: false,
        })
        .then(function (stream) {
          cameraStream = stream;
          if (!cameraVideo) return;
          cameraVideo.srcObject = stream;
          var playPromise = cameraVideo.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(function () {});
          }
        })
        .catch(function (err) {
          console.error("[MoverzWidget] Erreur accès caméra:", err);
          cameraUnavailable = true;
          fallbackToGallery();
          setError(
            "La caméra n'est pas disponible sur ce navigateur. Utilisez vos photos existantes."
          );
        });
    }

    function captureFromCamera() {
      if (!cameraVideo || !cameraActive) return;
      if (selectedFiles.length >= 3) {
        setError(
          "Ce widget de démonstration accepte jusqu'à 3 photos. Supprimez-en une pour en ajouter une nouvelle."
        );
        return;
      }

      var vw = cameraVideo.videoWidth || 0;
      var vh = cameraVideo.videoHeight || 0;
      if (!vw || !vh) return;

      var maxWidth = 1600;
      var maxHeight = 1200;
      var ratio = Math.min(maxWidth / vw, maxHeight / vh, 1);
      var targetWidth = Math.round(vw * ratio);
      var targetHeight = Math.round(vh * ratio);

      var canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      var ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(cameraVideo, 0, 0, targetWidth, targetHeight);

      canvas.toBlob(
        function (blob) {
          if (!blob) return;
          var file = new File([blob], "camera-" + Date.now() + ".jpg", {
            type: "image/jpeg",
          });
          selectedFiles.push(file);
          updatePhotosUI();
          updateAnalyzeDisabled();
          updateCameraCounter();
          setError("");
        },
        "image/jpeg",
        0.9
      );
    }

    function handleFiles(files) {
      setError("");
      var added = 0;
      for (var i = 0; i < files.length; i++) {
        if (selectedFiles.length >= 3) break;
        var f = files[i];
        if (!f.type || !f.type.startsWith("image/")) continue;
        selectedFiles.push(f);
        added++;
      }
      if (!added && !selectedFiles.length) {
        setError("Choisissez au moins une photo au format image.");
      } else if (selectedFiles.length > 3) {
        selectedFiles = selectedFiles.slice(0, 3);
      }
      updatePhotosUI();
      updateAnalyzeDisabled();
    }

    dropzone.addEventListener("click", function () {
      if (isAnalyzing) return;
      setError("");

      // Sur mobile avec caméra disponible: on lance directement le flux caméra
      // au clic sur la zone, comme dans l'étape 4 du tunnel. La galerie reste
      // accessible via le bouton "Utiliser ma galerie".
      if (cameraSupported && isCoarsePointer) {
        ensureCameraUI();
        if (cameraWrapper) {
          cameraWrapper.style.display = "block";
        }
        if (dropzone) {
          dropzone.style.display = "none";
        }
        startCamera();
        return;
      }

      // Desktop ou caméra indisponible: comportement classique d'upload.
      fileInput.click();
    });

    fileInput.addEventListener("change", function (event) {
      var files = event.target.files || [];
      handleFiles(files);
    });

    dropzone.addEventListener("dragover", function (event) {
      event.preventDefault();
      if (isAnalyzing) return;
      dropzone.classList.add("mzw-dropzone--active");
    });

    dropzone.addEventListener("dragleave", function (event) {
      event.preventDefault();
      dropzone.classList.remove("mzw-dropzone--active");
    });

    dropzone.addEventListener("drop", function (event) {
      event.preventDefault();
      dropzone.classList.remove("mzw-dropzone--active");
      if (isAnalyzing) return;
      var dt = event.dataTransfer;
      if (!dt) return;
      var files = dt.files || [];
      handleFiles(files);
    });

    function renderResults(items) {
      if (!items || !items.length) {
        resultsListEl.innerHTML =
          '<div class="mzw-small-text">Aucun objet clairement détecté. Essayez avec une autre photo ou passez directement à la demande de devis.</div>';
        resultsPillEl.textContent = "";
        resultsEl.style.display = "block";
        return;
      }

      var totalVolume = 0;
      var totalValue = 0;

      resultsListEl.innerHTML = "";

      items.forEach(function (item) {
        var vol = typeof item.volumeM3 === "number" ? item.volumeM3 : 0;
        var val =
          typeof item.valueEstimateEur === "number"
            ? item.valueEstimateEur
            : 0;
        totalVolume += vol;
        totalValue += val;

        var el = document.createElement("div");
        el.className = "mzw-item";

        var header = document.createElement("div");
        header.className = "mzw-item-header";

        var label = document.createElement("div");
        label.className = "mzw-item-label";
        label.textContent =
          item.label + (item.quantity && item.quantity > 1 ? " (x" + item.quantity + ")" : "");

        var badges = document.createElement("div");
        badges.className = "mzw-item-badges";

        if (vol) {
          var chipVol = document.createElement("div");
          chipVol.className = "mzw-chip";
          chipVol.textContent = vol.toFixed(2) + " m³";
          badges.appendChild(chipVol);
        }

        if (val) {
          var chipVal = document.createElement("div");
          chipVal.className = "mzw-chip-outline";
          chipVal.textContent = "~ " + Math.round(val) + " €";
          badges.appendChild(chipVal);
        }

        header.appendChild(label);
        header.appendChild(badges);

        var body = document.createElement("div");
        body.className = "mzw-item-body";

        if (
          typeof item.widthCm === "number" &&
          typeof item.depthCm === "number" &&
          typeof item.heightCm === "number"
        ) {
          var dims = document.createElement("div");
          dims.textContent =
            "Mesures approx. " +
            item.widthCm +
            "×" +
            item.depthCm +
            "×" +
            item.heightCm +
            " cm";
          body.appendChild(dims);
        }

        if (item.valueJustification) {
          var just = document.createElement("div");
          just.textContent = item.valueJustification;
          body.appendChild(just);
        }

        var sub = document.createElement("div");
        sub.className = "mzw-item-subdetails";
        var tags = [];
        if (item.flags && item.flags.fragile) tags.push("Fragile");
        if (item.flags && item.flags.requiresDisassembly)
          tags.push("Démontage conseillé");
        if (item.flags && item.flags.highValue) tags.push("Haute valeur");
        if (tags.length) {
          sub.textContent = tags.join(" • ");
          body.appendChild(sub);
        }

        el.appendChild(header);
        el.appendChild(body);
        resultsListEl.appendChild(el);
      });

      var roundedVol = totalVolume.toFixed(2);
      var roundedVal = Math.round(totalValue / 50) * 50;
      resultsPillEl.textContent =
        roundedVol +
        " m³ estimés · ~ " +
        new Intl.NumberFormat("fr-FR").format(roundedVal) +
        " €";
      resultsEl.style.display = "block";
    }

    // Compression côté navigateur, alignée avec la normalisation backend (≈400x300, JPEG qualité 80).
    function compressImageFile(file, maxWidth, maxHeight, quality) {
      return new Promise(function (resolve) {
        try {
          if (!file.type || !file.type.startsWith("image/")) {
            return resolve(file);
          }

          var img = new Image();
          img.onload = function () {
            try {
              var width = img.naturalWidth || img.width;
              var height = img.naturalHeight || img.height;
              if (!width || !height) return resolve(file);

              var ratio = Math.min(
                maxWidth / width,
                maxHeight / height,
                1
              );

              var targetWidth = Math.round(width * ratio);
              var targetHeight = Math.round(height * ratio);

              var canvas = document.createElement("canvas");
              canvas.width = targetWidth;
              canvas.height = targetHeight;
              var ctx = canvas.getContext("2d");
              if (!ctx) return resolve(file);

              ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

              canvas.toBlob(
                function (blob) {
                  if (!blob) return resolve(file);
                  var name =
                    (file.name || "photo")
                      .replace(/\.[^.]+$/, "") + ".jpg";
                  var compressed = new File([blob], name, {
                    type: "image/jpeg",
                  });
                  resolve(compressed);
                },
                "image/jpeg",
                quality
              );
            } catch (e) {
              console.error("[MoverzWidget] Erreur compression image:", e);
              resolve(file);
            }
          };
          img.onerror = function () {
            resolve(file);
          };

          var reader = new FileReader();
          reader.onload = function (event) {
            img.src = String(event.target && event.target.result);
          };
          reader.onerror = function () {
            resolve(file);
          };
          reader.readAsDataURL(file);
        } catch (e) {
          console.error("[MoverzWidget] Erreur compression image:", e);
          resolve(file);
        }
      });
    }

    async function analyze() {
      if (!selectedFiles.length || isAnalyzing) {
        if (!selectedFiles.length && !isAnalyzing) {
          setError(
            "Ajoutez au moins une photo avant de lancer l’analyse (caméra ou galerie)."
          );
        }
        return;
      }

      isAnalyzing = true;
      setError("");
      updateAnalyzeDisabled();
      // Quand l'utilisateur lance l'analyse, on retire le bloc de prise de
      // photos et on coupe la caméra pour ne pas laisser la preview active.
      if (cameraWrapper) {
        cameraWrapper.style.display = "none";
      }
      stopCamera();
      resultsEl.style.display = "none";
      resultsListEl.innerHTML = "";

      var originalLabel = analyzeLabel.textContent;
      analyzeLabel.textContent = "Analyse en cours…";

      // Progression visuelle : durée en fonction du nombre de photos
      // 1 photo = 9 s, 2 ou 3 photos = 11 s
      var photoCount = selectedFiles.length || 1;
      var expectedMs;
      if (photoCount <= 1) {
        expectedMs = 9000;
      } else {
        expectedMs = 11000;
      }

      if (progressMaskEl) {
        progressMaskEl.style.transition = "none";
        progressMaskEl.style.width = "0%";
        progressMaskEl.style.opacity = "1";
        // forcer un reflow pour que la transition reparte bien de 0%
        void progressMaskEl.offsetWidth;
        progressMaskEl.style.transition =
          "width " + expectedMs + "ms linear";
        progressMaskEl.style.width = "100%";
      }

      try {
        var formData = new FormData();

        // Compression client : max 400x300, JPEG qualité 0.8 (aligné avec /api/uploads/photos).
        var compressedFiles = await Promise.all(
          selectedFiles.map(function (file) {
            return compressImageFile(file, 400, 300, 0.8);
          })
        );

        compressedFiles.forEach(function (file) {
          formData.append("photos", file);
        });

        var response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });

        var json;
        try {
          json = await response.json();
        } catch (e) {
          throw new Error("Réponse inattendue de l’IA.");
        }

        if (!response.ok) {
          throw new Error(json && json.error ? json.error : "Erreur lors de l’analyse.");
        }

        var rooms = (json && json.rooms) || [];
        var items =
          rooms.length && rooms[0] && Array.isArray(rooms[0].items)
            ? rooms[0].items
            : [];

        renderResults(items);
        hasResults = true;

        // Step 2 : on garde seulement l'inventaire + CTA bas de carte
        dropzone.style.display = "none";
        photosRow.style.display = "none";
        if (headerEl) headerEl.style.display = "none";
        analyzeLabel.textContent = "Obtenir des devis gratuits";
      } catch (e) {
        console.error("[MoverzWidget] Erreur d’analyse:", e);
        setError(
          "L’IA n’a pas réussi à lire vos photos cette fois. Vous pouvez réessayer ou passer directement aux devis."
        );
      } finally {
        isAnalyzing = false;
        if (!hasResults) {
          analyzeLabel.textContent = originalLabel;
        }
        if (progressMaskEl) {
          progressMaskEl.style.transition = "opacity 300ms ease-out";
          progressMaskEl.style.opacity = "0";
        }
        updateAnalyzeDisabled();
      }
    }

    // Expose CTA handler à la page hôte
    if (typeof window !== "undefined") {
      if (!window.MoverzWidget) {
        window.MoverzWidget = {};
      }
      window.MoverzWidget.goToQuotes = function () {
        window.location.href =
          "https://devis.moverz.fr/?source=moverz.fr&from=header";
      };
    }

    analyzeBtn.addEventListener("click", function () {
      if (hasResults && window.MoverzWidget && window.MoverzWidget.goToQuotes) {
        window.MoverzWidget.goToQuotes();
      } else {
        analyze();
      }
    });

    // Double-clic facultatif sur le bloc de résultats pour aller aux devis
    resultsEl.addEventListener("dblclick", function () {
      if (window.MoverzWidget && window.MoverzWidget.goToQuotes) {
        window.MoverzWidget.goToQuotes();
      }
    });
  }

  function mount(options) {
    options = options || {};
    createRoot(options);
  }

  onReady(function () {
    mount({});
  });

  if (!window.MoverzWidget) {
    window.MoverzWidget = {};
  }
  window.MoverzWidget.mount = mount;
})(); 


