
(ns yourapp
  (:require [cloact.core :as cloact :refer [atom]]))

(def counter (atom 0))

(defn timer-component []
  (let [seconds-elapsed (atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds since last reset: " @seconds-elapsed])))

(defn app []
  [timer-component])

(defn ^:export run []
  (cloact/render-component [app] (.-body js/document)))
