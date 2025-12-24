import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

const TableEnseignement = ({ data, col1, col2, onDelete }) => (
  <div className="overflow-x-auto neo-card">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-primary text-primary-foreground font-mono uppercase text-sm">
          <th className="p-4 border-r border-primary-foreground/20">Niveau</th>
          <th className="p-4 border-r border-primary-foreground/20">{col1}</th>
          <th className="p-4">{col2}</th>
          <th className="p-4 w-20">Action</th>
        </tr>
      </thead>
      <tbody>
        <AnimatePresence>
          {data.map((item) => (
            <motion.tr 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="border-b border-primary/10 hover:bg-primary/5 transition-colors"
            >
              <td className="p-4 font-bold text-primary border-r border-primary/10">{item.niveau}</td>
              <td className="p-4 font-mono border-r border-primary/10">{item.nom}</td>
              <td className="p-4 text-muted-foreground text-sm leading-relaxed">{item.description}</td>
              <td className="p-4">
                <button onClick={() => onDelete(item.id)} className="text-destructive hover:scale-110 transition-transform">
                  <Trash2 size={18} />
                </button>
              </td>
            </motion.tr>
          ))}
        </AnimatePresence>
      </tbody>
    </table>
  </div>
);

export default TableEnseignement;
