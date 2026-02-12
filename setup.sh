#!/usr/bin/env bash
# outmore-globals/setup.sh
# Idempotent bootstrap — safe to run multiple times.
# Symlinks agents & skills so git pull auto-updates everything.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo ""
echo "  Outmore Living — Global Setup"
echo "  =============================="
echo ""

# ── 1. Ensure ~/.claude/ structure ──────────────────────────────
mkdir -p ~/.claude/agents
mkdir -p ~/.claude/skills

# ── 2. Symlink agents ──────────────────────────────────────────
echo "Agents:"
for agent_file in "$SCRIPT_DIR/agents/"*.md; do
  filename=$(basename "$agent_file")
  target="$HOME/.claude/agents/$filename"

  if [ -L "$target" ]; then
    current=$(readlink "$target")
    if [ "$current" != "$agent_file" ]; then
      ln -sf "$agent_file" "$target"
      echo -e "  ${GREEN}Updated${NC}: $filename"
    else
      echo -e "  ${GREEN}OK${NC}: $filename"
    fi
  elif [ -e "$target" ]; then
    echo -e "  ${YELLOW}SKIP${NC}: $filename (non-symlink file exists — back up & remove to link)"
  else
    ln -s "$agent_file" "$target"
    echo -e "  ${GREEN}Linked${NC}: $filename"
  fi
done

# ── 3. Symlink skills ──────────────────────────────────────────
echo ""
echo "Skills:"
for skill_dir in "$SCRIPT_DIR/skills/"*/; do
  dirname=$(basename "$skill_dir")
  target="$HOME/.claude/skills/$dirname"

  if [ -L "$target" ]; then
    current=$(readlink "$target")
    if [ "$current" != "$skill_dir" ]; then
      ln -sf "$skill_dir" "$target"
      echo -e "  ${GREEN}Updated${NC}: $dirname"
    else
      echo -e "  ${GREEN}OK${NC}: $dirname"
    fi
  elif [ -e "$target" ]; then
    echo -e "  ${YELLOW}SKIP${NC}: $dirname (non-symlink exists — back up & remove to link)"
  else
    ln -s "$skill_dir" "$target"
    echo -e "  ${GREEN}Linked${NC}: $dirname"
  fi
done

# ── 4. Global gitignore ────────────────────────────────────────
echo ""
echo "Config:"
if ! git config --global core.excludesfile > /dev/null 2>&1; then
  cp "$SCRIPT_DIR/templates/gitignore.global" "$HOME/.gitignore_global"
  git config --global core.excludesfile "$HOME/.gitignore_global"
  echo -e "  ${GREEN}Set${NC}: global gitignore"
else
  echo -e "  ${GREEN}OK${NC}: global gitignore already configured"
fi

# ── 5. Secrets template ────────────────────────────────────────
if [ ! -f "$HOME/.env.secrets" ]; then
  cp "$SCRIPT_DIR/templates/env.secrets.template" "$HOME/.env.secrets"
  chmod 600 "$HOME/.env.secrets"
  echo -e "  ${GREEN}Created${NC}: ~/.env.secrets (fill in your keys)"
else
  echo -e "  ${GREEN}OK${NC}: ~/.env.secrets already exists"
fi

# ── 6. Claude settings ─────────────────────────────────────────
if [ ! -f "$HOME/.claude/settings.json" ]; then
  cp "$SCRIPT_DIR/config/claude-settings.json" "$HOME/.claude/settings.json"
  echo -e "  ${GREEN}Created${NC}: Claude settings (agent teams enabled)"
else
  echo -e "  ${GREEN}OK${NC}: Claude settings already exist"
fi

# ── 7. Set OUTMORE_GLOBALS_PATH ────────────────────────────────
SHELL_RC="$HOME/.zshrc"
[ -f "$HOME/.bashrc" ] && [ ! -f "$HOME/.zshrc" ] && SHELL_RC="$HOME/.bashrc"

if ! grep -q "OUTMORE_GLOBALS_PATH" "$SHELL_RC" 2>/dev/null; then
  echo "" >> "$SHELL_RC"
  echo "# Outmore Living globals repo" >> "$SHELL_RC"
  echo "export OUTMORE_GLOBALS_PATH=\"$SCRIPT_DIR\"" >> "$SHELL_RC"
  echo -e "  ${GREEN}Added${NC}: OUTMORE_GLOBALS_PATH to $(basename $SHELL_RC)"
else
  echo -e "  ${GREEN}OK${NC}: OUTMORE_GLOBALS_PATH already in $(basename $SHELL_RC)"
fi

# ── Summary ─────────────────────────────────────────────────────
echo ""
echo "  Setup complete."
echo ""
echo "  Verify:"
echo "    ls -la ~/.claude/agents/"
echo "    ls -la ~/.claude/skills/outmore-*"
echo ""
echo "  Next steps:"
echo "    1. Fill in API keys in ~/.env.secrets"
echo "    2. Start a new project: /outmore-init my-project"
echo "    3. Read docs/project-setup-checklist.md"
echo ""
